import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";

const AppButton = ({
    handleConfirm = () => {},
    onClick = () => {},
    deleteTxt = "Delete",
    cancelTxt = "Cancel",
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
                {cancelTxt}
            </Button>
            {handleConfirm && (
                <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={handleConfirm}
                >
                    {deleteTxt}
                </Button>
            )}
        </Box>
    );
};

AppButton.propTypes = {
    onClick: PropTypes.func,
    handleConfirm: PropTypes.func,
    deleteTxt: PropTypes.string,
    cancelTxt: PropTypes.string,
};
export default AppButton;
