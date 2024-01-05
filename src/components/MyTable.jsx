import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const tempData = [
    {
        id: 1,
        dateTime: "2024-01-05 10:30",
        source: "Alice",
        destination: "Bob",
        duration: "15 mins",
    },
    {
        id: 2,
        dateTime: "2024-01-06 15:45",
        source: "Charlie",
        destination: "David",
        duration: "20 mins",
    },
    // Add more data as needed
];

const MyTable = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleDelete = (row) => {
        setModalOpen(true);
        setSelectedRow(row);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedRow(null);
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date/Time</TableCell>
                            <TableCell>Source</TableCell>
                            <TableCell>Destination</TableCell>
                            <TableCell>Duration</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tempData.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.dateTime}</TableCell>
                                <TableCell>{row.source}</TableCell>
                                <TableCell>{row.destination}</TableCell>
                                <TableCell>{row.duration}</TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() => handleDelete(row)}
                                        variant="outlined"
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Modal for Delete Confirmation */}
            <Modal open={modalOpen} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 300,
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        p: 2,
                    }}
                >
                    <p>Are you sure you want to delete this entry?</p>
                    <Button
                        onClick={handleCloseModal}
                        variant="outlined"
                        sx={{ mr: 2 }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            // Add your delete logic here
                            handleCloseModal();
                        }}
                        variant="contained"
                        color="error"
                    >
                        Delete
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default MyTable;
