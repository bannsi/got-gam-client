import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ArchiveFilledIcon from '../icons/ArchiveNavFilledIcon';
import ArchiveOutlinedIcon from '../icons/ArchiveNavOutlinedIcon';

const ArchiveNavButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/archive')}>
      {location.pathname == '/archive' ? <ArchiveFilledIcon /> : <ArchiveOutlinedIcon />}
    </Button>
  );
};

export default ArchiveNavButton;

const Button = styled.div``;
