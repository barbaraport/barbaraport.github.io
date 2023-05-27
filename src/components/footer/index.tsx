import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { Box } from "@mui/material"
import { Text } from "../../elements/text"

export const Footer = (): JSX.Element => {
    return (
        <Box
            sx={{
                backgroundColor: "primary.main",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box>
                <LinkedInIcon color="secondary" />
                <GitHubIcon color="secondary" />
            </Box>
            <Text
                type="body1"
                color="text.secondary"
                text="Made with 💖 by Bárbara Port"
            />
        </Box>
    )
}
