import { Typography, Card, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import MediaCard from "./MediaCard";

function Content() {
  return (
    <Box sx={{ marginTop: 9 }}>
      <Grid direction="column">
        <Typography variant="h4">Welcome to My Website</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <MediaCard
          img="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          title="Eifel"
          msg="Hello, World"
        />
        <MediaCard
          img="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg"
          title="Picture"
          msg="Hello, Camera"
        />
        <MediaCard
          img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          title="Sunset"
          msg="Web dev so hard"
        />
      </Grid>
    </Box>
  );
}
export default Content;
