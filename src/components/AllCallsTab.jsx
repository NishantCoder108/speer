import { IconButton, Tooltip, Typography } from "@mui/material";
import AppTable from "./common/AppTable";
import { formatDateTime, formatTime } from "../utils/format";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AppModal from "./common/AppModal";
import { useEffect, useState } from "react";
import AppButton from "./common/AppButton";
import AxiosInstance from "../api/AxiosInstance";
import { toast } from "react-toastify";
import CallViewDetails from "./CallViewDetails";

const AllCallsTab = () => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);
    const [openViewDetailsModal, setOpenViewDetailsModal] = useState(false);
    const [idToView, setIdToView] = useState(null);
    const [archivedData, setArchivedData] = useState([]);

    const handleToggleDeleteModal = (id) => {
        setOpenDeleteModal((prev) => !prev);
        setIdToDelete(id);
    };

    const handleToggleViewDetailsModal = (id) => {
        setOpenViewDetailsModal((prev) => !prev);
        setIdToView(id);
    };

    const fetchAllCalls = async () => {
        try {
            const response = await AxiosInstance.get("/activities");

            if (response && response?.data) {
                const res = response.data;
                console.log({ res });
                const filteredData = res.filter(
                    (item) => item.is_archived === false
                );
                console.log({ filteredData });
                setArchivedData(filteredData);
            }
        } catch (error) {
            console.log("ERROR in FETCHING CALLS", error);
            toast.error(error?.message || "500 Server Error", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    const deleteCallsById = async (id) => {
        try {
            const response = await AxiosInstance.patch(`/activities/${id}`, {
                is_archived: true,
            });

            if (response && response?.data) {
                const res = response.data;
                console.log({ res });
                toast("Deleted successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                await fetchAllCalls();
            }
        } catch (error) {
            console.error("Error fetching details:", error);
            toast.error(error?.message || "500 Server Error", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };
    const handleDelete = async () => {
        console.log(`Deleting item with ID: ${idToDelete}`);
        // Add your delete logic here
        await deleteCallsById(idToDelete);
        // Reset the state after delete
        setOpenDeleteModal(false);
        setIdToDelete(null);
    };

    const handleView = () => {
        console.log(`View item with ID: ${idToView}`);
        // Add your delete logic here

        // Reset the state after delete
        setOpenViewDetailsModal(false);
        setIdToView(null);
    };
    const columns = [
        {
            id: "created_at",
            label: "Date&Time",
            minWidth: 170,

            format: (value) => formatDateTime(value),
        },
        {
            id: "from",
            label: "Source",
            minWidth: 170,
            align: "center",
        },
        {
            id: "to",
            label: "Destination",
            minWidth: 170,
            align: "center",
        },
        {
            id: "duration",
            label: "Duration",
            minWidth: 170,
            align: "center",
            format: (value) => formatTime(value),
        },
        {
            id: "id",
            label: "Action",
            minWidth: 170,
            align: "center",
            format: (value) => {
                return (
                    <>
                        <Tooltip title="Delete">
                            <IconButton
                                aria-label="delete"
                                size="small"
                                onClick={() => handleToggleDeleteModal(value)}
                            >
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="View details">
                            <IconButton
                                aria-label="view details"
                                size="small"
                                onClick={() =>
                                    handleToggleViewDetailsModal(value)
                                }
                            >
                                <VisibilityOffIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </>
                );
            },
        },
    ];

    useEffect(() => {
        fetchAllCalls();
    }, []);

    return archivedData?.length > 0 ? (
        <>
            <AppTable
                columns={columns}
                key={"archived_calls"}
                rows={archivedData}
            />
            <AppModal
                open={openDeleteModal}
                handleToggleModal={() => handleToggleDeleteModal(null)}
            >
                <Typography variant="h6">
                    Are you sure you want to delete?
                </Typography>
                <AppButton
                    onClick={handleToggleDeleteModal}
                    handleConfirm={handleDelete}
                />
            </AppModal>

            {/* View Details in Modal */}
            <AppModal
                open={openViewDetailsModal}
                handleToggleModal={() => handleToggleViewDetailsModal(null)}
            >
                <CallViewDetails idToView={idToView} handleView={handleView} />

                {/* <AppButton onClick={handleToggleViewDetailsModal} handleConfirm={handleView}/> */}
                <AppButton
                    onClick={handleToggleViewDetailsModal}
                    cancelTxt="Close"
                    handleConfirm={null}
                />
            </AppModal>
        </>
    ) : (
        <Typography>No calls available at the moment. </Typography>
    );
};

export default AllCallsTab;
