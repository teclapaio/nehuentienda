import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardUser = ({ data }) => {
  console.log("data", data)
  console.log("id de data", data.id)
  console.log("type de data", data.type)
  return (
    
    <Card sx={{ maxWidth: 345, margin: 5 }}>
      <CardActionArea>
        <CardMedia component="img" image={data.avatar_url} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.login}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardUser;
