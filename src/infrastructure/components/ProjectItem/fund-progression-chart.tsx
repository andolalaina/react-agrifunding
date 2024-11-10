import { CircularProgress, Box, Typography } from "@mui/material";
import { formatCompact } from "../../../utils/formatter";

export const CustomCircularProgress = ({ actual, target }: { actual: number, target: number }) => {
    const value = (actual/target)*100
    return (
        <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" value={value} size={100} />
        <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Typography variant="caption" component="div" color="text.secondary" align="center">
            { formatCompact(actual) } / { formatCompact(target) }
            </Typography>
            <Typography variant="subtitle2">
                MGA
            </Typography>
        </Box>
        </Box>
    );
};
