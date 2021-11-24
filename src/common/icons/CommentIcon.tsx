import React from 'react';
import { IconContainer } from './IconContainer';

const CommentIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6.75C25.05 6.75 30.75 11.4 30.75 17.25C30.75 22.35 26.4 26.7 20.25 27.6L19.35 27.75L18.75 28.5L17.85 29.55L17.1 28.5L16.5 27.75L15.6 27.6C9.45 26.7 5.1 22.35 5.1 17.25C5.25 11.55 10.95 6.75 18 6.75ZM18 4.5C9.75 4.5 3 10.2 3 17.25C3 23.55 8.4 28.8 15.45 29.85L18 33L20.55 29.85C27.6 28.8 33 23.55 33 17.25C33 10.2 26.4 4.5 18 4.5Z" fill="#666666"/>
</svg>
        `
      }}
    ></IconContainer>
  );
};

export default CommentIcon;
