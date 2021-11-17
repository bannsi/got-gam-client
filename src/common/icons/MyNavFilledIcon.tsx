import React from 'react';

const MyNavFilledIcon = () => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" fill="white"/>
<path opacity="0.2" d="M36 0H0V36H36V0Z" fill="white"/>
<path d="M18 15.75C21.3137 15.75 24 13.0637 24 9.75C24 6.43629 21.3137 3.75 18 3.75C14.6863 3.75 12 6.43629 12 9.75C12 13.0637 14.6863 15.75 18 15.75Z" fill="black"/>
<path d="M31.5 31.4998H4.5V23.9998C4.5 20.6998 7.2 17.9998 10.5 17.9998H25.5C28.8 17.9998 31.5 20.6998 31.5 23.9998V31.4998Z" fill="black"/>
</svg>
        `
      }}
    ></span>
  );
};

export default MyNavFilledIcon;
