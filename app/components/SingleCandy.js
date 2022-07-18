import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSingleCandy,
  increaseQuantity,
  decreaseQuantity,
} from '../reducers';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';

const SingleCandy = (props) => {
  const candy = useSelector((state) => state.singleCandy);
  const dispatch = useDispatch();
  const params = useParams();

  const disabledIncrease = candy.quantity === 10;
  const disabledDecrease = candy.quantity === 0;

  useEffect(() => {
    dispatch(getSingleCandy(params.id));
  }, [dispatch]);

  return (
    <div className="box-container">
      <Card className="candy-card">
        <CardMedia
          component="img"
          alt={`${candy.name} candy image`}
          height="300"
          image={candy.imageUrl}
          title={`${candy.name} candy image`}
        />
        <div>
          <CardContent>
            <Typography component="h5" variant="h5">
              {candy.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {candy.description}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Quantity: {candy.quantity}
            </Typography>
          </CardContent>
        </div>
        <CardActions>
          <Button
            size="small"
            color="primary"
            disabled={disabledDecrease}
            onClick={() => dispatch(decreaseQuantity(candy.id))}
          >
            Decrease
          </Button>
          <Button
            size="small"
            color="primary"
            disabled={disabledIncrease}
            onClick={() => dispatch(increaseQuantity(candy.id))}
          >
            Increase
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default SingleCandy;
