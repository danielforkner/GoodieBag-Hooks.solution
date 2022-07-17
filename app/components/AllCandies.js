import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCandies } from '../reducers';
import Candy from './Candy';

const AllCandies = () => {
  const dispatch = useDispatch();
  const candies = useSelector((state) => state.allCandies);
  const candyStatus = useSelector((state) => state.status);

  useEffect(() => {
    if (candyStatus === 'idle') {
      dispatch(getAllCandies());
    }
  }, [candyStatus, dispatch]);

  return (
    <div>
      <h1>All Candies Component</h1>
      {candies.map((candy) => (
        <div className="card" key={candy.id}>
          {candy.name}
          <Candy candy={candy} />
        </div>
      ))}
      <Candy />
    </div>
  );
};

export default AllCandies;

// class AllCandies extends React.Component {
//   componentDidMount() {
//     this.props.getAllCandies();
//   }

//   render() {
//     return (
//       <div>
//         <h2 className="section-title">Candies</h2>
//         <ul className="container">
//           {this.props.candies.map(candy => (
//             <div className="card" key={candy.id}>
//               <Candy candy={candy} />
//             </div>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//   candies: state.allCandies
// });

// const mapDispatchToProps = (dispatch) => ({
//   getAllCandies: () => dispatch(getAllCandies())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(AllCandies);
