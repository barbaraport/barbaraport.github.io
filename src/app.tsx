import Container from "@mui/material/Container";
import { MyAvatar } from "./components/avatar";
import { Grid } from "@material-ui/core";
import { AboutMe } from "./components/aboutMe";
import { Text } from "./elements/text";
import { MyMainBox } from "./components/myMainBox";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./theme";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{backgroundColor:'text.secondary'}}>
        <MyMainBox/>
        <Container>
          <Grid
            container
            spacing={1}
            direction="column"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            style={{ width: "100%" }}
          >
            <MyAvatar/>
            <Text type='body1' text='Bárbara Port'/>
            <AboutMe/>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
