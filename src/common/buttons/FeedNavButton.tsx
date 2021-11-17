import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FeedNavFilledIcon from '../icons/FeedNavFilledIcon';
import FeedNavOutlinedIcon from '../icons/FeedNavOutlinedIcon';

const FeedNavButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/feed')}>
      {location.pathname == '/feed' ? <FeedNavFilledIcon /> : <FeedNavOutlinedIcon />}
    </Button>
  );
};

export default FeedNavButton;

const Button = styled.div``;
