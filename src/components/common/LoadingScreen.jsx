import React from 'react';
import LOADER from '../../assets/loader.svg';

const LoadingScreen = () => (
  <div className="center">
    <img src={LOADER} alt="loading" />
  </div>
);

export default LoadingScreen;
