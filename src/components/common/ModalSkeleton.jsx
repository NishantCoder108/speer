import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ModalSkeleton = () => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: "2rem" }} height={30} />
            {/* <Skeleton variant="circular" width={40} height={40} /> */}
            <Skeleton variant="rectangular" height={60} />
            <Skeleton variant="rounded" height={60} />
        </Stack>
    );
};

export default ModalSkeleton;
