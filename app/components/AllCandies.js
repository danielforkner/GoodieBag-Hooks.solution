import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCandies } from '../reducers';
import Candy from './Candy';

const AllCandies = () => {
  const dispatch = useDispatch();
  const candies = useSelector((state) => state.allCandies);
  const candyStatus = useSelector((state) => state.status);

  useEffect(() => {
    if (candyStatus !== 'succeeded') {
      dispatch(getAllCandies());
    }
  }, [candyStatus, dispatch]);

  return (
    <div>
      <h2 className="section-title">All Candies Component</h2>
      <ul className="container">
        {candies.map((candy) => (
          <div className="card" key={candy.id}>
            <Candy candy={candy} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AllCandies;
