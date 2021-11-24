import React from 'react';
import { IconContainer } from './IconContainer';

const HomeNavOutlinedIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" fill="white"/>
        <path d="M19.2 3.225C18.9 2.925 18.3 2.925 18 3.225L1.5 13.725L2.7 15.675L5.1 14.175V31.575H14.85H22.35H32.1V14.025L34.5 15.525L35.7 13.575L19.2 3.225ZM21.6 29.175H15.6V21.675H21.6V29.175ZM29.85 29.175H23.85V20.925C23.85 20.025 23.25 19.425 22.35 19.425H14.85C13.95 19.425 13.35 20.025 13.35 20.925V29.175H7.35V12.675L18.6 5.475L29.85 12.675V29.175Z" fill="#666666"/>
        </svg>
        `
      }}
    ></IconContainer>
  );
};

export default HomeNavOutlinedIcon;
