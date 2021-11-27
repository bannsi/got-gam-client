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
import { useNavigate } from 'react-router-dom';
import { LocationResponse } from '../modules/make-piece/utils/functions/LocationResponse';
import { Location } from '../modules/make-piece/utils/functions/Location.interface';
import { useDispatch } from 'react-redux';
import { makePieceSuccess } from '../modules/piece/utils/piece.action';
import axios from 'axios';
const MakePiece = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState(0);
  const [imgLocation, setImgLocation] = useState<Location>({
    lat: 0,
    lng: 0
  });
  const [location, setLocation] = useState<LocationResponse>();
  const [fileList, setFileList] = useState<File[]>([]);
  const [date, setDate] = useState('2021-11-28');
  const [keywords, setKeywords] = useState<number[]>([]);
  const [companion, setCompanion] = useState<number[]>([]);
  const [description, setDescription] = useState<string>('');

  const onNext = () => {
    setForm(form + 1);
  };

  const onSubmit = async () => {
    if (location) {
      const formData = new FormData();
      for (let i = 0; i < fileList.length; i++) {
        formData.append('images', fileList[i]);
      }
      formData.append('date', date);
      formData.append('content', description);
      formData.append('latitude', location?.y);
      formData.append('longitude', location?.x);
      formData.append('address', location?.place_name);
      formData.append('addressDetail', location?.address_name);
      formData.append('placeUrl', location?.place_url);
      let keyword = '';
      let com = '';
      for (let i = 0; i < keywords.length; i++) {
        keyword += keyword + `${keywords[i].toString()},`;
      }
      for (let i = 0; i < companion.length; i++) {
        com += com + `${companion[i].toString()},`;
      }
      formData.append('whos', com);
      formData.append('keywords', keyword);
      console.log(JSON.stringify(companion));
      try {
        const res = await axios.post(`http://52.79.130.111:5555/peices/v1/`, formData, {
          headers: {
            ['Authorization']: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTk4MjY2MDQ1IiwiZXhwIjoxNjQ1NTI2NjE4LCJpYXQiOjE2Mzc3NTA2MTh9.q5rfGr8NZD69yZhXS5FUfWmj81NJCeru15Tbgibda9_P1PO_TiweW5OIz20Dr1zTpwMJsEa7UxncLAYsjs3hSg`,
            ['Content-Type']: `multipart/form-data`
          }
        });
        console.log(res);
        await dispatch(makePieceSuccess(res.data.body));
        await navigate(`/piece/${res.data.body.peiceId}`);
      } catch (e) {
        console.log(e);
      }
    }
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
          onNext={() => {
            onSubmit();
          }}
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
