import React from 'react';
import { IconContainer } from './IconContainer';

const PlusIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.5 16.95H19.05V4.5H16.8V16.95H4.5V19.2H16.8V31.5H19.05V19.2H31.5V16.95Z" fill="#666666"/>
</svg>
        `
      }}
    ></IconContainer>
  );
};

export default PlusIcon;
