import React, { useState } from 'react';
import styled from 'styled-components';
import { Upload, Modal } from 'antd';
import getBase64 from '../utils/getBase64';
import { UploadFile } from 'antd/lib/upload/interface';
import NextButton from '../../../common/buttons/NextButton';
import EXIF from 'exif-js';
import { ConvertDMSToDD } from '../utils/ConvertDMSToDD';
import { Location } from '../utils/Location.interface';
interface ImgUploadProps {
  fileList: File[];
  setFileList: (fileList: File[]) => void;
  onNext: () => void;
  setImgLocation: (location: Location) => void;
}

const ImgUploader = ({ fileList, setFileList, onNext, setImgLocation }: ImgUploadProps) => {
  function handleChange(e: any) {
    const [file] = e.target.files;
    if (file && file.name) {
      EXIF.getData(file, function () {
        const exifData = EXIF.pretty(file);
        const gpsLat = EXIF.getTag(file, 'GPSLatitude');
        const gpsLng = EXIF.getTag(file, 'GPSLongitude');
        const latDirection = EXIF.getTag(file, 'GPSLatitudeRef');
        const lngDirection = EXIF.getTag(file, 'GPSLongitudeRef');

        console.log('exif' + exifData);
        if (exifData && gpsLat && gpsLng && latDirection && lngDirection) {
          const latDec = ConvertDMSToDD(gpsLat[0], gpsLat[1], gpsLat[2], latDirection);
          const lngDec = ConvertDMSToDD(gpsLng[0], gpsLng[1], gpsLng[2], lngDirection);
          setImgLocation({ lat: latDec, lng: lngDec });
        } else {
          console.log("No EXIF data found in image '" + file.name + "'.");
        }
      });
    }
  }
  return (
    <Container>
      <input
        type="file"
        multiple
        accept="image/jpg, image/jpeg, image/png, image/gif, image/bmp , .heic"
        onChange={handleChange}
      ></input>
      <NextButton
        text="이미지 업로드"
        onNext={() => {
          onNext();
        }}
      />
    </Container>
  );
};

export default ImgUploader;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
