import Container from "@mui/material/Container";
import { MyAvatar } from "./components/avatar";
import { Grid } from "@material-ui/core";
import { AboutMe } from "./components/aboutMe";
import { Text } from "./elements/text";

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
        <MyAvatar/>
        <Text text='Bárbara Port'/>
        <AboutMe/>
      </Grid>
    </Container>
  );
}

export default App;
