import { Box } from "@mui/material"
import { Text } from "../../elements/text"

export const Footer = (): JSX.Element => {
    return (
        <Box sx={{ backgroundColor: "primary.main", width: '100vw'}}>
            <Text type="body1" text="Hello" />
        </Box>
    )
}
