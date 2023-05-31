import { Box } from "@mui/material"
import Avatar from "@mui/material/Avatar"
import { Text } from "../../elements/text"

type AvatarSize = {
    width: string
    height: string
}

export const MyAvatar = (): JSX.Element => {
    const avatarSize: AvatarSize = {
        width: "30vh",
        height: "30vh",
    }

    return (
        <Box sx={{backgroundColor: 'secondary.main'}}>
            <Avatar
                alt="Bárbara Port"
                src="https://avatars.githubusercontent.com/u/62317075?v=4"
                sx={avatarSize}
            />
            <Text type="h6" text="Bárbara Port"/>
        </Box>
    )
}
