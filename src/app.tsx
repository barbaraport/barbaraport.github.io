import { ThemeProvider } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MyPage } from "./pages/myPage"
import theme from "./theme"

const App = (): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MyPage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
