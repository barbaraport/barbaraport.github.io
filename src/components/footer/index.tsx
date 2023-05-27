import { Box } from "@mui/material"
import { Text } from "../../elements/text"

export const Footer = (): JSX.Element => {
    return (
        <Box
            sx={{
                backgroundColor: "primary.main",
                padding: "8px",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Text
                type="body1"
                color="text.secondary"
                text="Made with 💖 by Bárbara Port"
            />
        </Box>
    )
}
