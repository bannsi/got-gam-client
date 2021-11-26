import { UploadFile } from 'antd/lib/upload/interface';
import React, { useState } from 'react';
import styled from 'styled-components';
import Description from '../modules/make-piece/components/Description';
import How from '../modules/make-piece/components/How';
import ImgUploader from '../modules/make-piece/components/ImgUploader';
import MakerHeader from '../modules/make-piece/components/MakerHeader';
import When from '../modules/make-piece/components/When';
import Where from '../modules/make-piece/components/Where';
import Who from '../modules/make-piece/components/Who';
import moment, { Moment } from 'moment';
import { useNavigate } from 'react-router-dom';
import { LocationResponse } from '../modules/make-piece/utils/functions/LocationResponse';
import { Location } from '../modules/make-piece/utils/functions/Location.interface';
const MakePiece = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(0);
  const [imgLocation, setImgLocation] = useState<Location>({
    lat: 0,
    lng: 0
  });
  const [location, setLocation] = useState<LocationResponse>();
  const [fileList, setFileList] = useState<File[]>([]);
  const [date, setDate] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [companion, setCompanion] = useState<string[]>([]);
  const [description, setDescription] = useState<string>('');

  const onNext = () => {
    setForm(form + 1);
  };

  // const onSubmit = () => {};

  const formList = [
    {
      name: 'img',
      element: (
        <ImgUploader
          fileList={fileList}
          setFileList={setFileList}
          onNext={onNext}
          setImgLocation={setImgLocation}
          setDate={setDate}
        />
      )
    },
    {
      name: 'where',
      element: (
        <Where
          onNext={onNext}
          setLocation={setLocation}
          lat={imgLocation.lat}
          lng={imgLocation.lng}
        />
      )
    },
    {
      name: 'when',
      element: (
        <When
          fileList={fileList}
          date={date}
          setDate={setDate}
          locationName={location?.place_name}
          onNext={onNext}
        />
      )
    },
    {
      name: 'how',
      element: (
        <How
          date={date}
          keywords={keywords}
          setKeywords={setKeywords}
          locationName={location?.place_name}
          onNext={onNext}
        />
      )
    },
    {
      name: 'who',
      element: (
        <Who
          date={date}
          companion={companion}
          setCompanion={setCompanion}
          locationName={location?.place_name}
          onNext={onNext}
        />
      )
    },
    {
      name: 'desc',
      element: (
        <Description
          description={description}
          setDescription={setDescription}
          onNext={() => navigate(-1)}
        />
      )
    }
  ];
  return (
    <Container>
      <MakerHeader setForm={setForm} form={form} />
      <ElementContainer>{formList[form].element}</ElementContainer>
    </Container>
  );
};

export default MakePiece;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
`;
