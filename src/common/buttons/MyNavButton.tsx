import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyNavFilledIcon from '../icons/MyNavFilledIcon';
import MyNavOutlinedIcon from '../icons/MyNavOutlinedIcon';

const MyNavButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/my-page')}>
      {location.pathname == '/my-page' ? <MyNavFilledIcon /> : <MyNavOutlinedIcon />}
    </Button>
  );
};

export default MyNavButton;

const Button = styled.div``;
