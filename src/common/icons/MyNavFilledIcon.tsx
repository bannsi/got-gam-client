import React from 'react';
import { IconContainer } from './IconContainer';

const MyNavFilledIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_330_6869)">
<path d="M27.7502 20L28 20.2764V22.7141C28 23.0322 27.9459 23.3674 27.8377 23.7195C27.729 24.0712 27.5585 24.3937 27.3251 24.687C27.0918 24.9799 26.8043 25.215 26.4628 25.3908C26.1213 25.5666 25.7256 25.6963 25.2754 25.7803V24.976C25.7585 24.8255 26.1126 24.5612 26.3377 24.1843C26.5628 23.8074 26.6749 23.3339 26.6749 22.7646H25.2251L25 22.463V20.2511L25.2498 20H27.7502Z" fill="#F45400"/>
<g clip-path="url(#clip1_330_6869)">
<path d="M14 12C16.2091 12 18 10.2091 18 8C18 5.79086 16.2091 4 14 4C11.7909 4 10 5.79086 10 8C10 10.2091 11.7909 12 14 12Z" fill="black"/>
<path d="M23 22.5H5V17.5C5 15.3 6.8 13.5 9 13.5H19C21.2 13.5 23 15.3 23 17.5V22.5Z" fill="black"/>
</g>
</g>
<defs>
<clipPath id="clip0_330_6869">
<rect width="28" height="28" fill="white"/>
</clipPath>
<clipPath id="clip1_330_6869">
<rect width="18" height="18.5" fill="white" transform="translate(5 4)"/>
</clipPath>
</defs>
</svg>

        `
      }}
    ></IconContainer>
  );
};

export default MyNavFilledIcon;
