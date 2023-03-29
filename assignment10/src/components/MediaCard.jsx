import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { height, sizeWidth } from "@mui/system";
import { Grid } from "@mui/material";

export default function MediaCard(props) {
  return (
    <Grid item xs={6}>
      <Card sx={{ maxWidth: 345 }}>
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
