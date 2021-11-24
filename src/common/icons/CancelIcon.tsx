import React from 'react';
import { IconContainer } from './IconContainer';

const CancelIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.7998 8.69995L27.2998 7.19995L17.9998 16.35L8.69981 7.19995L7.0498 8.69995L16.3498 18L7.0498 27.3L8.69981 28.95L17.9998 19.65L27.2998 28.95L28.7998 27.3L19.6498 18L28.7998 8.69995Z" fill="#666666"/>
</svg>
        `
      }}
    ></IconContainer>
  );
};

export default CancelIcon;
