import { Box } from "@mui/material";
import { Text } from "../../elements/text";

export const MyMainBox = (): JSX.Element => {

    return (
        <Box sx={{
            backgroundColor:'pink', 
            width:'100%', 
            height: '100vh',
            display: 'flex', 
            alignSelf: 'center',
            alignItems: 'center'
            }}>
            <Text 
            type="h1"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor porttitor tortor non pulvinar."></Text>
        </Box>
    );
}