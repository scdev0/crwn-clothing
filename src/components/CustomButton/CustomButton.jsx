import React from 'react';

import { CustomButtonContainer } from './CustomButton-Styled';

const CustomButton = ({ children, ...otherProps }) => {
  return <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>;
};

export default CustomButton;
