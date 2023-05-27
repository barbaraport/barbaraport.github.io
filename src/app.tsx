import { Box, ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import { AboutMe } from "./components/aboutMe";
import { MyAvatar } from "./components/avatar";
import { MyMainBox } from "./components/myMainBox";
import { Text } from "./elements/text";
import theme from "./theme";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
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
      </Box>
    </ThemeProvider>
  );
};

export default App;
