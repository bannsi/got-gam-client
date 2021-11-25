import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPlaceListAPI } from '../utils/getPlaceListAPI';
import { Location } from '../utils/Location.interface';
import { LocationResponse } from '../utils/LocationResponse';
import LocationItem from './LocationItem';

interface WhereProps {
  lat: number;
  lng: number;
  setLocation: (location: Location) => void;
  onNext: () => void;
}

const Where = ({ lat, lng, setLocation, onNext }: WhereProps) => {
  const [placeList, setPlaceList] = useState<LocationResponse[]>([]);
  useEffect(() => {
    getPlaceListAPI(lat, lng, placeList, setPlaceList);
  }, []);
  return (
    <Container>
      {placeList.map((place) => (
        <LocationItem
          onClick={() => {
            setLocation({ lat: parseFloat(place.y), lng: parseFloat(place.y) });
            onNext();
          }}
          key={place.id}
          location={place}
        />
      ))}
    </Container>
  );
};

export default Where;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
