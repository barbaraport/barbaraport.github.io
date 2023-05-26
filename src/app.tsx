import Container from "@mui/material/Container";
import { MyAvatar } from "./components/avatar";
import { AboutMe } from "./components/aboutMe";
import { Text } from "./elements/text";
import { MyMainBox } from "./components/myMainBox";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Menu from './components/menu'

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{backgroundColor:'text.secondary'}}>
        <Menu/>
        <MyMainBox/>
        <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px'}}>
            <MyAvatar/>
            <Text type='body1' text='Bárbara Port'/>
            <AboutMe/>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
