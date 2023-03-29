import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/Nav.css";

export default function Nav() {
  const [isMobileView, setIsMobileView] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setIsMobileView(1);
      } else {
        setIsMobileView(0);
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
    <section>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="Nav" sx={{ backgroundColor: "#20232a" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Website
            </Typography>
            {isMobileView == 1 ? (
              <Button color="inherit">
                <MenuIcon />
              </Button>
            ) : isMobileView == 0 ? (
              <>
                <Button color="inherit">HOME</Button>
                <Button color="inherit">ABOUT</Button>
                <Button color="inherit">CONTACT</Button>
              </>
            ) : (
              <></>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </section>
  );
}
