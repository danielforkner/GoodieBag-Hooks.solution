import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCandies } from '../reducers';
import Candy from './Candy';
import { v4 as uuidv4 } from 'uuid';

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
      <h2 className="section-title">
        Candies
        {candyStatus === 'loading'
          ? ': LOADING'
          : candyStatus === 'failed'
          ? ': failed to load'
          : null}
      </h2>
      <ul className="container">
        {candies.map((candy) => (
          <div className="card" key={uuidv4()}>
            <Candy candy={candy} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AllCandies;
