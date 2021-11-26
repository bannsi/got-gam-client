import React from 'react';
import styled from 'styled-components';

const PieceDetailItem = () => {
  return (
    <Container>
      <Img></Img>
      <Desc>
        문체부는 한국관광공사와 함께 9일부터 숙박할인권을 발급한다. 여행객들은 국내
        온라인여행사(OTA) 47곳을 통 문체부는 한국관광공사와 함께 9일부터 숙박할인권을 발급한다.
        여행객들은 국내 온라인여행사(OTA) 47곳을 통 문체부는 한국관광공사와 함께 9일부터
        숙박할인권을 발급한다. 여행객들은 국내 온라인여행사(OTA) 47곳을 통
      </Desc>
    </Container>
  );
};

export default PieceDetailItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 8px;
`;

const Img = styled.div`
  width: calc(100vw - 32px);
  height: calc(100vw - 32px);
  border-radius: 8px 8px 0 0;
  background-color: #cccccc;
`;

const Desc = styled.div`
  display: flex;
  padding: 24px 16px;
`;
