import React from 'react';
import styled from 'styled-components';

const AddNewFolderIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="8" fill="#C4C4C4"/>
<path d="M17.5312 12.375H18.4688C18.5521 12.375 18.5938 12.4167 18.5938 12.5V23.5C18.5938 23.5833 18.5521 23.625 18.4688 23.625H17.5312C17.4479 23.625 17.4062 23.5833 17.4062 23.5V12.5C17.4062 12.4167 17.4479 12.375 17.5312 12.375Z" fill="white"/>
<path d="M12.75 17.4062H23.25C23.3333 17.4062 23.375 17.4479 23.375 17.5312V18.4688C23.375 18.5521 23.3333 18.5938 23.25 18.5938H12.75C12.6667 18.5938 12.625 18.5521 12.625 18.4688V17.5312C12.625 17.4479 12.6667 17.4062 12.75 17.4062Z" fill="white"/>
</svg>
        `
      }}
    ></IconContainer>
  );
};

export default AddNewFolderIcon;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;
