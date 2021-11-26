import React from 'react';
import styled from 'styled-components';
import { ButtonText } from '../../../common/text/ButtonText';
import { Caption } from '../../../common/text/Caption';
import { LocationResponse } from '../utils/functions/LocationResponse';

interface LocationItemProps {
  location: LocationResponse;
  onClick: () => void;
}

const LocationItem = ({ onClick, location }: LocationItemProps) => {
  return (
    <Container onClick={onClick}>
      <ButtonText>{location.place_name}</ButtonText>
      <Caption>{location.address_name}</Caption>
    </Container>
  );
};

export default LocationItem;

const Container = styled.div`
  /* padding: 16px 24px; */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75px;
  padding: 16px;
`;
