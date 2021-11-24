import React from 'react';
import { IconContainer } from './IconContainer';

const ArchiveNavOutlinedIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27 6.75C27.45 6.75 27.75 7.05 27.75 7.2V28.05L18.9 24C18.6 23.85 18.3 23.85 18 23.85C17.7 23.85 17.4 23.85 17.1 24L8.25 27.9V7.2C8.25 7.05 8.55 6.75 9 6.75H27ZM27 4.5H9C7.35 4.5 6 5.7 6 7.2V31.5L18 26.1L30 31.5V7.2C30 5.7 28.65 4.5 27 4.5Z" fill="#666666"/>
        </svg>
        `
      }}
    ></IconContainer>
  );
};

export default ArchiveNavOutlinedIcon;
