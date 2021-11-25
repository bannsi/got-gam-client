import React from 'react';
import { IconContainer } from './IconContainer';
interface BackIconProps {
  onBack: () => void;
}
const BackIcon = ({ onBack }: BackIconProps) => {
  return (
    <IconContainer
      onClick={onBack}
      dangerouslySetInnerHTML={{
        __html: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.9996 16.8H7.1996L17.2496 6.75L15.5996 5.25L2.84961 18L15.5996 30.75L17.2496 29.25L7.1996 19.05H32.9996V16.8Z" fill="#666666"/>
</svg>
        `
      }}
    ></IconContainer>
  );
};

export default BackIcon;
