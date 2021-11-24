import React from 'react';
import { IconContainer } from './IconContainer';

const ArchiveNavFilledIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 31.5L18 26.1L6 31.5V7.2C6 5.7 7.35 4.5 9 4.5H27C28.65 4.5 30 5.7 30 7.2V31.5Z" fill="#181818"/>
        <path d="M37.5837 27L38 27.4606V31.5235C38 32.0537 37.9098 32.6123 37.7295 33.1992C37.5483 33.7853 37.2641 34.3228 36.8752 34.8117C36.4863 35.2998 36.0072 35.6916 35.438 35.9847C34.8688 36.2777 34.2093 36.4939 33.4589 36.6339V35.2934C34.2641 35.0424 34.8543 34.602 35.2295 33.9739C35.6047 33.3457 35.7915 32.5564 35.7915 31.6077H33.3752L33 31.105V27.4185L33.4163 27H37.5837Z" fill="#F45400"/>
        </svg>
        `
      }}
    ></IconContainer>
  );
};

export default ArchiveNavFilledIcon;
