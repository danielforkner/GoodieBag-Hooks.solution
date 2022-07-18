import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AllCandies from './AllCandies';
import SingleCandy from './SingleCandy';
import NotFound from './NotFound';
import { AppBar, Button, Toolbar } from '@mui/material';

const Root = () => {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit">
              <Link className="navlink" to="/">
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link className="navlink" to="/candies">
                Candies
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
        </main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/candies" element={<AllCandies />} />
          <Route exact path="/candies/:id" element={<SingleCandy />} />
          <Route path="*" element={<NotFound />} />
          {/* this route without a path will render the NotFound component if no other Route match was found in the list above */}
        </Routes>
      </div>
    </Router>
  );
};

export default Root;
