import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AxiosInstance from "../api/AxiosInstance";
import { Box, Grid, Typography } from "@mui/material";
import { formatDateTime, formatTime } from "../utils/format";
import ModalSkeleton from "./common/ModalSkeleton";

const CallViewDetails = ({ idToView = null, handleView = () => {} }) => {
    const [data, setData] = useState({});

    const fetchCallsById = async (id) => {
        try {
            const response = await AxiosInstance.get(`/activities/${id}`);

            if (response && response?.data) {
                const res = response.data;

                setData((prev) => ({ ...prev, ...res }));
            }
        } catch (error) {
            console.error("Error fetching details:", error);
            handleView();
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

    useEffect(() => {
        fetchCallsById(idToView);
    }, [idToView]);

    console.log("data of ke", data);
    console.log("data of key", data.keys);

    console.log("data length", data.keys?.length);
    return data && Object.keys(data)?.length > 0 ? (
        <Box sx={{ width: "100%" }}>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={6}>
                    <Typography variant="h6" fontSize={"1.05rem"}>
                        Date&Time
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" fontSize={"1.05rem"}>
                        : {formatDateTime(data?.created_at)}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" fontSize={"1.05rem"}>
                        Direction
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" fontSize={"1.05rem"}>
                        : {data?.direction}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" fontSize={"1.05rem"}>
                        Source
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" fontSize={"1.05rem"}>
                        : {data?.from}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" fontSize={"1.05rem"}>
                        Destination{" "}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" fontSize={"1.05rem"}>
                        : {data.to}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" fontSize={"1.05rem"}>
                        Via
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" fontSize={"1.05rem"}>
                        : {data.via}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" fontSize={"1.05rem"}>
                        Duration
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" fontSize={"1.05rem"}>
                        : {formatTime(data.duration)}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="h6" fontSize={"1.05rem"}>
                        Call Type
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" fontSize={"1.05rem"}>
                        : {data.call_type}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="h6" fontSize={"1.05rem"}>
                        Archived
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" fontSize={"1.05rem"}>
                        : {data.archived}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    ) : (
        <ModalSkeleton />
    );
};

CallViewDetails.propTypes = {
    handleView: PropTypes.func,
    idToView: PropTypes.string || PropTypes.null,
};
export default CallViewDetails;
