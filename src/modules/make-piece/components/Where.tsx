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
  const [placeList, setPlaceList] = useState<LocationResponse[]>([]);
  const codeList = ['AT4', 'AD5', 'FD6', 'CE7', 'CT1'];
  useEffect(() => {
    codeList.map(async (code) => {
      const data = await getPlaceListAPI(lat, lng, code);
      await ('placelist' + placeList);
      await setPlaceList([...data]);
      return data;
    });
  }, []);
  return (
    <Container>
      <SearchInput />
      {placeList.map((place) => (
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
