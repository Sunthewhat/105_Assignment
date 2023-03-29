import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function MCard(props) {
  return (
    <Grid item xs={props.size}>
      <Card>
        <CardMedia sx={{ height: 140 }} image={props.img} title={props.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.msg}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
