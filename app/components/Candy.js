import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const Candy = ({ candy }) => {
  return (
    <Link to={`/candies/${candy.id}`}>
      <Card className="candy-card">
        <CardActionArea>
          <CardMedia
            component="img"
            alt={`${candy.name} candy image`}
            height="140"
            image={candy.imageUrl}
            title={`${candy.name} candy image`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {candy.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default Candy;
