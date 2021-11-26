import React from 'react';
import styled from 'styled-components';

const SelectIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" fill="white"/>
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#F45400"/>
<circle cx="12" cy="12" r="9.5" stroke="white"/>
</svg>
        `
      }}
    ></IconContainer>
  );
};

export default SelectIcon;

const IconContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
