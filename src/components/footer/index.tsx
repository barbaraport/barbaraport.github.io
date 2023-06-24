import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { Box } from "@mui/material"
import IconButton from "@mui/material/IconButton"
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
                <IconButton
                    onClick={() =>
                        (window.location.href =
                            "https://www.linkedin.com/in/barbaraport/")
                    }
                >
                    <LinkedInIcon color="secondary" />
                </IconButton>
                <IconButton
                    onClick={() =>
                        (window.location.href =
                            "https://github.com/barbaraport")
                    }
                >
                    <GitHubIcon color="secondary" />
                </IconButton>
            </Box>
            <Text type="body1" color="text.secondary">
                Made with 💖 by Bárbara Port
            </Text>
        </Box>
    )
}
