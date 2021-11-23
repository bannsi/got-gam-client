import React from 'react';
import styled from 'styled-components';
import { Upload } from 'antd';

const ImgUpload = () => {
  return (
    <Container>
      <Upload onPreview={handlePreview}></Upload>
    </Container>
  );
};

export default ImgUpload;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
