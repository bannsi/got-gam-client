import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPlaceListAPI } from '../utils/functions/getPlaceListAPI';
import { LocationResponse } from '../utils/functions/LocationResponse';
import LocationItem from './LocationItem';
import SearchInput from './SearchInput';

interface WhereProps {
  lat: number;
  lng: number;
  setLocation: (location: LocationResponse) => void;
  onNext: () => void;
}

const Where = ({ lat, lng, setLocation, onNext }: WhereProps) => {
  const [AT4, setAT4] = useState<LocationResponse[]>([]);
  const [AD5, setAD5] = useState<LocationResponse[]>([]);
  const [FD6, setFD6] = useState<LocationResponse[]>([]);
  const [CE7, setCE7] = useState<LocationResponse[]>([]);
  const [CT1, setCT1] = useState<LocationResponse[]>([]);

  useEffect(() => {
    getPlaceListAPI(lat, lng, 'AT4', setAT4);
    getPlaceListAPI(lat, lng, 'AD5', setAD5);
    getPlaceListAPI(lat, lng, 'FD6', setFD6);
    getPlaceListAPI(lat, lng, 'CE7', setCE7);
    getPlaceListAPI(lat, lng, 'CT1', setCT1);
  }, []);
  return (
    <Container>
      <SearchInput />
      {AT4.map((place) => (
        <LocationItem
          onClick={() => {
            setLocation(place);
            onNext();
          }}
          key={place.id}
          location={place}
        />
      ))}
      {AD5.map((place) => (
        <LocationItem
          onClick={() => {
            setLocation(place);
            onNext();
          }}
          key={place.id}
          location={place}
        />
      ))}
      {FD6.map((place) => (
        <LocationItem
          onClick={() => {
            setLocation(place);
            onNext();
          }}
          key={place.id}
          location={place}
        />
      ))}
      {CE7.map((place) => (
        <LocationItem
          onClick={() => {
            setLocation(place);
            onNext();
          }}
          key={place.id}
          location={place}
        />
      ))}
      {CT1.map((place) => (
        <LocationItem
          onClick={() => {
            setLocation(place);
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
