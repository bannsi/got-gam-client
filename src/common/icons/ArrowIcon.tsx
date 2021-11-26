import React from 'react';
import { IconContainer } from './IconContainer';

const ArrowIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.50049 5.99951L15.5005 11.9995L9.50049 17.9995" stroke="#666666" stroke-width="1.72487" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `
      }}
    ></IconContainer>
  );
};

export default ArrowIcon;
