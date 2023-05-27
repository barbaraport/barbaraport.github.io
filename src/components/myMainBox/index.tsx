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
            <Text
                type="h2"
                color="text.secondary"
                text="Looking for a skilled software developer?"
            />
        </Box>
    )
}
