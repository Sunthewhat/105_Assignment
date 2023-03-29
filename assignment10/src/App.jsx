import * as React from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import { Box, Container, Grid } from "@mui/material";
import SideBar from "./components/SideBar";
import RigthBar from "./components/RigthBar";
function App() {
  const [isMobileView, setIsMobileView] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call the handleResize function once on initial load to set the initial view state
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box>
      <Nav />
      <Container>
        <Grid container spacing={2}>
          {!isMobileView ? (
            <Grid item xs={3}>
              <SideBar />
            </Grid>
          ) : (
            <></>
          )}
          <Grid item xs={isMobileView ? 12 : 6}>
            <Content />
          </Grid>
          {!isMobileView ? (
            <Grid item xs={3}>
              <RigthBar />
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
export default App;
