import React from 'react';
import { IconContainer } from './IconContainer';

const ArchiveFilledIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 3H7C6.46957 3 5.96086 3.21071 5.58578 3.58579C5.21071 3.96086 5 4.46957 5 5V21L12 18L19 21V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3Z" fill="white"/>
      </svg>
        `
      }}
    ></IconContainer>
  );
};

export default ArchiveFilledIcon;
