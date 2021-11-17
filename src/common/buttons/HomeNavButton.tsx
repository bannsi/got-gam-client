import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HomeNavFilledIcon from '../icons/HomeNavFilledIcon';
import HomeNavOutlinedIcon from '../icons/HomeNavOutlinedIcon';

const HomeNavButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/')}>
      {location.pathname == '/' ? <HomeNavFilledIcon /> : <HomeNavOutlinedIcon />}
    </Button>
  );
};

export default HomeNavButton;

const Button = styled.div``;
