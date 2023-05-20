import { Box } from "@mui/material";
import { Text } from "../../elements/text";

export const MyMainBox = (): JSX.Element => {

    return (
        <Box sx={{backgroundColor:'pink', width:'100%', height: '100vh', display: 'flex', alignSelf: 'center'}}>
            <Text text="hello"></Text>
        </Box>
    );
}