import Container from "@mui/material/Container";
import { MyAvatar } from "./components/avatar";
import { Grid, Typography } from "@material-ui/core";
import { AboutMe } from "./components/aboutme/aboutme";

function App() {
  return (
    <Container>
      <Grid
        container
        spacing={1}
        direction="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
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
