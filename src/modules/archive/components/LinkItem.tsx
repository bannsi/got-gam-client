import { LinkPreview } from '@dhaiwat10/react-link-preview';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import TimeStamp from './TimeStamp';

const LinkItem = () => {
  const timeList = ['03:15', '03:15'];
  // useEffect(() => {
  //   const TimeList = document.createElement('div');
  //   timeList.forEach((time) => TimeList.appendChild());
  // }, []);
  return (
    <Container>
      <LinkPreview
        borderRadius="8px"
        imageHeight="165px"
        margin="8px 0"
        borderColor="#E1E1E1"
        url="https://junistory.blogspot.com/2017/06/css-ellipsis.html"
      />
    </Container>
  );
};

export default LinkItem;

const Container = styled.div`
  position: relative;
  display: flex;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  .Container {
    display: flex;
    flex: 1;
  }
  .LowerContainer {
    padding: 8px 16px;
  }
  .Title {
    font-size: 14px;
    color: #000000;
    margin-bottom: 8px;
  }
  .SiteDetails {
    font-size: 10px;
    color: #999999 !important;
  }
`;
