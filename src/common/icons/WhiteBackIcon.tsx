import React from 'react';
import { IconContainer } from './IconContainer';
interface BackIconProps {
  onBack: () => void;
}
const WhiteBackIcon = ({ onBack }: BackIconProps) => {
  return (
    <IconContainer
      onClick={onBack}
      dangerouslySetInnerHTML={{
        __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9994 11.2H4.79941L11.4994 4.5L10.3994 3.5L1.89941 12L10.3994 20.5L11.4994 19.5L4.79941 12.7H21.9994V11.2Z" fill="white"/>
</svg>

        `
      }}
    ></IconContainer>
  );
};

export default WhiteBackIcon;
