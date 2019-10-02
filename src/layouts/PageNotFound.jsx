import React from 'react';
import NavBar from '../components/common/NavBar';

const PageNotFound = () => (
  <div className="container">
      <NavBar />
      <div className="center text-center">
        <div className="404" style={{fontSize:"10rem"}}>
          404
        </div>
        <p className="text-body">
          Someone seems lost <span role="img" aria-label="moon-face">🌚</span>
        </p>
        <a href="/">Go back</a>
      </div>
  </div>
);

export default PageNotFound;