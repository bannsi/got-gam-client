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
  fileList: UploadFile<any>[];
  setFileList: (fileList: UploadFile<any>[]) => void;
  onNext: () => void;
  setImgLocation: (location: Location) => void;
}

const ImgUpload = ({ fileList, setFileList, onNext, setImgLocation }: ImgUploadProps) => {
  const [fileState, setFileState] = useState({
    previewVisible: false,
    previewImage: '',
    previewTitle: ''
  });

  const onPreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setFileState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    });
  };
  const onCancel = () => setFileState({ ...fileState, previewVisible: false });
  const onChange = (info: any) => {
    setFileList(info.fileList);

    if (fileList[0]?.url) {
      EXIF.getData(fileList[0].url, function (this: any) {
        const exifData = EXIF.getAllTags(this);
        if (exifData) {
          console.log('exif' + exifData);
          const latDegree = exifData.GPSLatitude[0].numerator;
          const latMinute = exifData.GPSLatitude[1].numerator;
          const latSecond = exifData.GPSLatitude[2].numerator;
          const latDirection = exifData.GPSLatitudeRef;

          const latFinal = ConvertDMSToDD(latDegree, latMinute, latSecond, latDirection);
          console.log(latFinal);

          // Calculate longitude decimal
          const lonDegree = exifData.GPSLongitude[0].numerator;
          const lonMinute = exifData.GPSLongitude[1].numerator;
          const lonSecond = exifData.GPSLongitude[2].numerator;
          const lonDirection = exifData.GPSLongitudeRef;

          const lonFinal = ConvertDMSToDD(lonDegree, lonMinute, lonSecond, lonDirection);
          console.log(lonFinal);

          setImgLocation({ lat: latFinal, lon: lonFinal });
        }
      });
    }
  };

  return (
    <Container>
      <Upload
        onChange={onChange}
        listType="picture"
        fileList={fileList}
        onPreview={onPreview}
        maxCount={5}
        multiple
      >
        + Upload
      </Upload>

      <Modal
        visible={fileState.previewVisible}
        title={fileState.previewTitle}
        footer={null}
        onCancel={onCancel}
      >
        <img style={{ width: '100%' }} src={fileState.previewImage} />
      </Modal>
      <NextButton text={'이미지 선택 완료'} onNext={onNext} />
    </Container>
  );
};

export default ImgUpload;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
