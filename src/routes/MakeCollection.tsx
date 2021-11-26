import React, { useState } from 'react';
import styled from 'styled-components';
import MakerHeader from '../modules/make-piece/components/MakerHeader';

const MakeCollection = () => {
  const [form, setForm] = useState(0);
  const onNext = () => {
    setForm(form + 1);
  };
  const formList = [{}];
  return (
    <Container>
      <MakerHeader isCollection={true} setForm={setForm} form={form} />
      {/* <ElementContainer>{formList[form].element}</ElementContainer> */}
    </Container>
  );
};

export default MakeCollection;

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
