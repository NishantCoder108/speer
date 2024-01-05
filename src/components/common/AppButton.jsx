import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";

const AppButton = ({
    handleConfirm = () => {},
    onClick = () => {},
    deleteTxt = "Delete",
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                marginTop: "9px",
            }}
        >
            <Button onClick={onClick} size="small">
                Cancel
            </Button>
            <Button
                variant="contained"
                color="error"
                size="small"
                onClick={handleConfirm}
            >
                {deleteTxt}
            </Button>
        </Box>
    );
};

AppButton.propTypes = {
    onClick: PropTypes.func,
    handleConfirm: PropTypes.func,
    deleteTxt: PropTypes.string,
};
export default AppButton;
