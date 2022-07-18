import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
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
import { styled } from '@mui/system';
import { useParams } from 'react-router-dom';

const styles = {
  card: {
    maxWidth: 500,
  },
  media: {
    objectFit: 'cover',
  },
};

const SingleCandy = (props) => {
  console.log('props: ', props);
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
      <Card>
        <CardMedia
          component="img"
          alt={`${candy.name} candy image`}
          // className={classes.media}
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

// export default connect(mapStateToProps)(SingleCandy);

// class SingleCandy extends React.Component {
//   constructor(props) {
//     super(props);
//     this.increase = this.increase.bind(this);
//     this.decrease = this.decrease.bind(this);
//   }

//   componentDidMount() {
//     this.props.getSingleCandy(this.props.match.params.id);
//   }

//   increase() {
//     this.props.increaseQuantity(this.props.match.params.id);
//   }

//   decrease() {
//     this.props.decreaseQuantity(this.props.match.params.id);
//   }

//   render() {
//     const { candy, classes } = this.props;
//     const disabledIncrease = candy.quantity === 10;
//     const disabledDecrease = candy.quantity === 0;
//     return (
//       <div className="box-container">
//         <Card className={classes.card}>
//           <CardMedia
//             component="img"
//             alt={`${candy.name} candy image`}
//             className={classes.media}
//             height="300"
//             image={candy.imageUrl}
//             title={`${candy.name} candy image`}
//           />
//           <div className={classes.details}>
//             <CardContent className={classes.content}>
//               <Typography component="h5" variant="h5">
//                 {candy.name}
//               </Typography>
//               <Typography variant="subtitle1" color="textSecondary">
//                 {candy.description}
//               </Typography>
//               <Typography variant="subtitle1" color="textSecondary">
//                 Quantity: {candy.quantity}
//               </Typography>
//             </CardContent>
//           </div>
//           <CardActions>
//             <Button
//               size="small"
//               color="primary"
//               disabled={disabledDecrease}
//               onClick={this.decrease}
//             >
//               Decrease
//             </Button>
//             <Button
//               size="small"
//               color="primary"
//               disabled={disabledIncrease}
//               onClick={this.increase}
//             >
//               Increase
//             </Button>
//           </CardActions>
//         </Card>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   candy: state.singleCandy,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getSingleCandy: (id) => dispatch(getSingleCandy(id)),
//   increaseQuantity: (id) => dispatch(increaseQuantity(id)),
//   decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
// });

// SingleCandy.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default styled(
//   connect(mapStateToProps, mapDispatchToProps)(SingleCandy),
//   styles
// );
