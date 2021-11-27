import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CollectionItemType } from '../../myPage/utils/myPage.api';
import WhiteBackIcon from '../../../common/icons/WhiteBackIcon';

interface HeaderProps {
  collection: CollectionItemType;
}

const Header = ({ collection }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <Container style={{ backgroundImage: `url(${collection.coverImage})` }}>
      <BackContainer>
        <WhiteBackIcon onBack={() => navigate(-1)} />
      </BackContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  background-size: contain;
`;

const BackContainer = styled.div`
  display: flex;
  align-items: center;
`;
