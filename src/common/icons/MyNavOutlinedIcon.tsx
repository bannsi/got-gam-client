import React from 'react';
import { IconContainer } from './IconContainer';

const MyNavOutlinedIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" fill="white"/>
<path d="M18 15.75C21.3 15.75 24 13.05 24 9.75C24 6.45 21.3 3.75 18 3.75C14.7 3.75 12 6.45 12 9.75C12 13.05 14.7 15.75 18 15.75ZM18 6C20.1 6 21.75 7.65 21.75 9.75C21.75 11.85 20.1 13.5 18 13.5C15.9 13.5 14.25 11.85 14.25 9.75C14.25 7.65 15.9 6 18 6Z" fill="#666666"/>
<path d="M25.5 20.2498C27.6 20.2498 29.25 21.8998 29.25 23.9998V29.2498H6.75V23.9998C6.75 21.8998 8.4 20.2498 10.5 20.2498H25.5ZM25.5 17.9998H10.5C7.2 17.9998 4.5 20.6998 4.5 23.9998V31.4998H31.5V23.9998C31.5 20.6998 28.8 17.9998 25.5 17.9998Z" fill="#666666"/>
</svg>

        `
      }}
    ></IconContainer>
  );
};

export default MyNavOutlinedIcon;
