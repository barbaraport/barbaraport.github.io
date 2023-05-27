import { Box } from "@mui/material"
import { Text } from "../../elements/text"

export const Footer = (): JSX.Element => {
    return (
        <Box sx={{ backgroundColor: "primary.main", width: '100vw', padding: '8px'}}>
            <Text type="body1" text="Made with 💖 by Bárbara Port" />
        </Box>
    )
}
