import { Box } from "@mui/material"
import { Text } from "../../elements/text"

export const MyMainBox = (): JSX.Element => {
    return (
        <Box
            sx={{
                backgroundColor: "primary.main",
                width: "100%",
                height: "100vh",
                display: "flex",
                textAlign: "center",
                alignSelf: "center",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
            }}
        >
            <Text id={"text-initial"} type="h2" color="text.secondary">
                Looking for a skilled software developer?
            </Text>
        </Box>
    )
}
