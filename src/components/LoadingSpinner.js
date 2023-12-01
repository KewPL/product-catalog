import React from 'react';

const LoadingSpinner = () => {
  const spinnerStyle = {
    border: '4px solid rgba(0, 0, 0, 0.3)',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 1s linear infinite',
  };

  return <div style={spinnerStyle}></div>;
};

export default LoadingSpinner;
