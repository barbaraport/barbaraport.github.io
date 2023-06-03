import { Box, Container, Fade } from "@mui/material"
import { AboutMe } from "../../components/aboutMe"
import { MyAvatar } from "../../components/avatar"
import { Footer } from "../../components/footer"
import { MyMainBox } from "../../components/myMainBox"

export const MyPage = (): JSX.Element => {
    return (
        <Box sx={{ backgroundColor: "text.secondary" }}>
            <Fade in={true} timeout={2500}>
                <Box>
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
                        <AboutMe />
                    </Container>
                    <Footer />
                </Box>
            </Fade>
        </Box>
    )
}
