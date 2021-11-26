import React from 'react';
import styled from 'styled-components';

const SearchIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.65 6.75C22.05 6.75 26.55 11.25 26.55 16.65C26.55 22.05 22.05 26.55 16.65 26.55C11.25 26.55 6.75 22.05 6.75 16.65C6.75 11.25 11.1 6.75 16.65 6.75ZM16.65 4.5C9.9 4.5 4.5 9.9 4.5 16.65C4.5 23.4 9.9 28.8 16.65 28.8C23.4 28.8 28.8 23.4 28.8 16.65C28.8 9.9 23.4 4.5 16.65 4.5Z" fill="#707070"/>
<path d="M25.6525 24.1463L24.0615 25.7373L30.6376 32.3133L32.2285 30.7224L25.6525 24.1463Z" fill="#707070"/>
</svg>
        `
      }}
    ></IconContainer>
  );
};

export default SearchIcon;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
