import React from 'react';
import styled from 'styled-components';
import NextButton from '../../../common/buttons/NextButton';
import EXIF from 'exif-js';
import { ConvertDMSToDD } from '../utils/functions/ConvertDMSToDD';
import { Location } from '../utils/functions/Location.interface';

interface ImgUploadProps {
  fileList: File[];
  setFileList: (fileList: File[]) => void;
  onNext: () => void;
  setImgLocation: (location: Location) => void;
  setDate: (date: string) => void;
}

const ImgUploader = ({
  fileList,
  setFileList,
  onNext,
  setImgLocation,
  setDate
}: ImgUploadProps) => {
  function handleChange(e: any) {
    const [file] = e.target.files;
    if (file && file.name) {
      EXIF.getData(file, function () {
        const exifData = EXIF.pretty(file);
        const gpsLat = EXIF.getTag(file, 'GPSLatitude');
        const gpsLng = EXIF.getTag(file, 'GPSLongitude');
        const latDirection = EXIF.getTag(file, 'GPSLatitudeRef');
        const lngDirection = EXIF.getTag(file, 'GPSLongitudeRef');
        const date = EXIF.getTag(file, 'DateTime');

        if (exifData) {
          if (gpsLat && gpsLng && latDirection && lngDirection) {
            const latDec = ConvertDMSToDD(gpsLat[0], gpsLat[1], gpsLat[2], latDirection);
            const lngDec = ConvertDMSToDD(gpsLng[0], gpsLng[1], gpsLng[2], lngDirection);
            const loc: Location = { lat: latDec, lng: lngDec };
            setImgLocation(loc);
          }
          if (date) {
            const formatDate = date
              .split(' ')[0]
              .split(':')
              .map((ele: any) => ele);
            setDate(`${formatDate[0]}-${formatDate[1]}-${formatDate[2]}`);
          }
        } else {
          console.log("No EXIF data found in image '" + file.name + "'.");
        }
      });
      console.log(e.target.files);
      setFileList(e.target.files);
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
  height: 100%;
  justify-content: space-between;
`;
