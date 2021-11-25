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
import { Location } from '../modules/make-piece/utils/Location.interface';

const MakePiece = () => {
  const [form, setForm] = useState(0);
  const [imgLocation, setImgLocation] = useState<Location>({
    lat: 0,
    lng: 0
  });
  const [location, setLocation] = useState<Location>({
    lat: 0,
    lng: 0
  });
  const [fileList, setFileList] = useState<File[]>([]);
  const onNext = () => {
    setForm(form + 1);
  };
  const formList = [
    {
      name: 'img',
      element: (
        <ImgUploader
          fileList={fileList}
          setFileList={setFileList}
          onNext={onNext}
          setImgLocation={setImgLocation}
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
    { name: 'when', element: <When /> },
    { name: 'how', element: <How /> },
    { name: 'who', element: <Who /> },
    { name: 'desc', element: <Description /> }
  ];
  return (
    <Container>
      <MakerHeader setForm={setForm} form={form} />
      {formList[form].element}
    </Container>
  );
};

export default MakePiece;

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
`;
