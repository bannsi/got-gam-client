import React from 'react';
import styled from 'styled-components';
import ArrowIcon from '../../../common/icons/ArrowIcon';
import LocationIcon from '../../../common/icons/LocationIcon';
import { ButtonText } from '../../../common/text/ButtonText';
import { Caption } from '../../../common/text/Caption';
import { Piece } from '../utils/piece.interface';

interface LocationItemProps {
  piece: Piece;
}

const LocationItem = ({ piece }: LocationItemProps) => {
  return (
    <Container onClick={() => window.open(piece.placeUrl)}>
      <Content>
        <LocationIcon />
        <Place>
          <ButtonText className="place">{piece.address}</ButtonText>
          <Caption>{piece.addressDetail}</Caption>
        </Place>
      </Content>
      <ArrowIcon />
    </Container>
  );
};

export default LocationItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  padding: 16px;
  border-radius: 8px;
  background: #ffffff;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Place = styled.div`
  display: flex;
  flex-direction: column;
  .place {
    margin-bottom: 5px;
  }
`;
