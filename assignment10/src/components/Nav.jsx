import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../styles/Nav.css";

export default function ButtonAppBar() {
  return (
    <section>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className="Nav"
          sx={{ backgroundColor: "#20232a" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Website
            </Typography>
            <Button color="inherit">HOME</Button>
            <Button color="inherit">ABOUT</Button>
            <Button color="inherit">CONTACT</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </section>
  );
}
