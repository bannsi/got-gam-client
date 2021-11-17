import React from 'react';

const LikeIcon = () => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.6 6.75C28.2 6.75 30.75 9.6 30.75 13.5C30.75 23.55 21 29.1 18 30.6C15 29.1 5.25 23.7 5.25 13.5C5.25 9.6 7.8 6.75 11.4 6.75C12.9 6.75 15.15 7.95 16.5 9.15L18 10.5L19.5 9.15C20.85 7.95 22.95 6.75 24.6 6.75ZM24.6 4.5C22.35 4.5 19.65 6 18 7.5C16.35 6 13.8 4.5 11.4 4.5C6.45 4.5 3 8.55 3 13.5C3 27 18 33 18 33C18 33 33 27 33 13.5C33 8.55 29.55 4.5 24.6 4.5Z" fill="#666666"/>
</svg>
        `
      }}
    ></span>
  );
};

export default LikeIcon;
