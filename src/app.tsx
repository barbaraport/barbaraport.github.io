import Container from "@mui/material/Container";
import { MyAvatar } from "./components/avatar";
import { Grid, Typography } from "@material-ui/core";
import { AboutMe } from "./components/aboutMe";

const App = (): JSX.Element => {
  return (
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
        <MyAvatar />
        <Typography variant="subtitle1" color="textPrimary">
          Bárbara Port
        </Typography>
        <AboutMe></AboutMe>
      </Grid>
    </Container>
  );
}

export default App;
