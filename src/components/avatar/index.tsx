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
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <Avatar
                alt="Bárbara Port"
                src="https://avatars.githubusercontent.com/u/62317075?v=4"
                sx={avatarSize}
            />
            <Text id={"my-name"} type="h6">
                Hello! You can call me Bárbara Port. I am here to help you.
            </Text>
        </Box>
    )
}
