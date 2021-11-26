import React from 'react';
import { IconContainer } from './IconContainer';

const LikeFilledIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4 3C14.9 3 13.1 4 12 5C10.9 4 9.2 3 7.6 3C4.3 3 2 5.7 2 9C2 18 12 22 12 22C12 22 22 18 22 9C22 5.7 19.7 3 16.4 3Z" fill="#F45400"/>
</svg>
        `
      }}
    ></IconContainer>
  );
};

export default LikeFilledIcon;
