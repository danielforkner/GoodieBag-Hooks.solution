import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
const styles = {
  card: {
    maxWidth: 500,
  },
  media: {
    objectFit: 'cover',
  },
};

const Candy = (props) => {
  const { candy, classes } = props;

  return (
    <Link to={`/candies/${candy.id}`}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={`${candy.name} candy image`}
            className={classes.media}
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

Candy.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default styled(Candy, styles);
