import React from 'react';
import { IconContainer } from './IconContainer';

const LikeOutlinedIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4 4.5C18.8 4.5 20.5 6.4 20.5 9C20.5 15.7 14 19.4 12 20.4C10 19.4 3.5 15.8 3.5 9C3.5 6.4 5.2 4.5 7.6 4.5C8.6 4.5 10.1 5.3 11 6.1L12 7L13 6.1C13.9 5.3 15.3 4.5 16.4 4.5ZM16.4 3C14.9 3 13.1 4 12 5C10.9 4 9.2 3 7.6 3C4.3 3 2 5.7 2 9C2 18 12 22 12 22C12 22 22 18 22 9C22 5.7 19.7 3 16.4 3Z" fill="#666666"/>
</svg>

        `
      }}
    ></IconContainer>
  );
};

export default LikeOutlinedIcon;
