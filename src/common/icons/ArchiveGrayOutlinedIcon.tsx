import React from 'react';
import { IconContainer } from './IconContainer';

const ArchiveGrayOutlinedIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 4.5C18.3 4.5 18.5 4.7 18.5 4.8V18.7L12.6 16C12.4 15.9 12.2 15.9 12 15.9C11.8 15.9 11.6 15.9 11.4 16L5.5 18.6V4.8C5.5 4.7 5.7 4.5 6 4.5H18ZM18 3H6C4.9 3 4 3.8 4 4.8V21L12 17.4L20 21V4.8C20 3.8 19.1 3 18 3Z" fill="#666666"/>
</svg>
       `
      }}
    ></IconContainer>
  );
};

export default ArchiveGrayOutlinedIcon;
