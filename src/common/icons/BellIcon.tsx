import React from 'react';
import { IconContainer } from './IconContainer';

const BellIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.2496 26.25V15.75C29.2496 10.35 25.3496 5.85 20.2496 4.8C19.9496 3.75 19.0496 3 17.9996 3C16.9496 3 16.0496 3.75 15.7496 4.65C10.6496 5.7 6.74961 10.2 6.74961 15.6V26.1H4.34961V28.5H6.74961H12.4496C13.3496 31.05 15.4496 33 18.1496 33C20.8496 33 22.9496 31.05 23.8496 28.5H29.3996H31.6496V26.25H29.2496ZM17.9996 30.75C16.6496 30.75 15.4496 29.85 14.6996 28.5H21.1496C20.5496 29.85 19.3496 30.75 17.9996 30.75ZM23.9996 26.25H11.9996H8.99961V15.75C8.99961 10.8 13.0496 6.75 17.9996 6.75C22.9496 6.75 26.9996 10.8 26.9996 15.75V26.25H23.9996Z" fill="#707070"/>
</svg>
        `
      }}
    ></IconContainer>
  );
};

export default BellIcon;
