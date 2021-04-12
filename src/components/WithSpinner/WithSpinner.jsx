import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './WithSpinner-Styled';

const WithSpinner = (WrappedComponent) => {
  // Return a spinner when isLoading otherwise returned the wrapped component
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default WithSpinner;
