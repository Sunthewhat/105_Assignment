import Nav from "./components/Nav";
import Content from "./components/Content";
import MediaCard from "./components/MediaCard";
import { Box, Container, Grid } from "@mui/material";
import SideBar from "./components/SideBar";
import RigthBar from "./components/RigthBar";
function App() {
  return (
    <Box>
      <Nav />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <SideBar />
          </Grid>
          <Grid item xs={6}>
            <Content />
          </Grid>
          <Grid item xs={3}>
            <RigthBar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default App;
