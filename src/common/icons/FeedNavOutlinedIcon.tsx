import React from 'react';
import { IconContainer } from './IconContainer';

const FeedNavOutlinedIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" fill="white"/>
<path d="M27 11.2498H9V13.4998H27V11.2498Z" fill="#666666"/>
<path d="M19.5 18.75H9V21H19.5V18.75Z" fill="#666666"/>
<path d="M30 4.49976H6C5.1 4.49976 4.5 5.09976 4.5 5.99976V31.4998H31.5V5.99976C31.5 5.09976 30.75 4.49976 30 4.49976ZM29.25 29.2498H6.75V6.74976H29.25V29.2498Z" fill="#666666"/>
</svg>
        `
      }}
    ></IconContainer>
  );
};

export default FeedNavOutlinedIcon;
