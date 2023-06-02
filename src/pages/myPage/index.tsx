import { Box, Container, Fade } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { AboutMe } from "../../components/aboutMe"
import { MyAvatar } from "../../components/avatar"
import { Footer } from "../../components/footer"
import { MyMainBox } from "../../components/myMainBox"

export const MyPage = (): JSX.Element => {
    const myRef = useRef()

    const [isMyElementVisible, updateIsMyElementVisible] = useState()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0]
            updateIsMyElementVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    }, [])

    return (
        <Box sx={{ backgroundColor: "text.secondary" }}>
            <MyMainBox />
            <Fade in={isMyElementVisible} ref={myRef}>
                <Box>
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
