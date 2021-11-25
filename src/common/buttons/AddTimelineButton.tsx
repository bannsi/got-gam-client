import React from 'react';
import styled from 'styled-components';

interface AddButtonProps {
  onClick: () => void;
}

const AddTimelineButton = ({ onClick }: AddButtonProps) => {
  return (
    <IconContainer
      onClick={onClick}
      dangerouslySetInnerHTML={{
        __html: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="27" height="27" rx="13.5" stroke="#E1E1E1"/>
<path d="M13.5312 8.375H14.4688C14.5521 8.375 14.5938 8.41667 14.5938 8.5V19.5C14.5938 19.5833 14.5521 19.625 14.4688 19.625H13.5312C13.4479 19.625 13.4062 19.5833 13.4062 19.5V8.5C13.4062 8.41667 13.4479 8.375 13.5312 8.375Z" fill="#E1E1E1"/>
<path d="M8.75 13.4062H19.25C19.3333 13.4062 19.375 13.4479 19.375 13.5312V14.4688C19.375 14.5521 19.3333 14.5938 19.25 14.5938H8.75C8.66667 14.5938 8.625 14.5521 8.625 14.4688V13.5312C8.625 13.4479 8.66667 13.4062 8.75 13.4062Z" fill="#E1E1E1"/>
</svg>
        `
      }}
    ></IconContainer>
  );
};

export default AddTimelineButton;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
