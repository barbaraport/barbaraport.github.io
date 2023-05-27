import { Box, Container } from "@mui/material"
import { AboutMe } from "../../components/aboutMe"
import { MyAvatar } from "../../components/avatar"
import { Footer } from "../../components/footer"
import { MyMainBox } from "../../components/myMainBox"
import { Text } from "../../elements/text"

export const MyPage = (): JSX.Element => {
    return (
        <Box sx={{ backgroundColor: "text.secondary" }}>
            <MyMainBox />
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "8px",
                }}
            >
                <MyAvatar />
                <Text type="body1" text="Bárbara Port" />
                <AboutMe />
            </Container>
            <Footer />
        </Box>
    )
}
