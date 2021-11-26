import React from 'react';
import { IconContainer } from './IconContainer';

const ArchiveFilledIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21L12 17.4L4 21V4.8C4 3.8 4.9 3 6 3H18C19.1 3 20 3.8 20 4.8V21Z" fill="#F45400"/>
</svg>
        `
      }}
    ></IconContainer>
  );
};

export default ArchiveFilledIcon;
