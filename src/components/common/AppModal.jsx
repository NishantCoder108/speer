import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 2,
    borderRadius: "6px",
    outline: "none",
};

const AppModal = ({ children, open, handleToggleModal = () => {} }) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleToggleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} square="true">
                    {children}
                </Box>
            </Modal>
        </div>
    );
};

AppModal.propTypes = {
    children: PropTypes.node,
    open: PropTypes.bool,
    handleToggleModal: PropTypes.func,
};
export default AppModal;
