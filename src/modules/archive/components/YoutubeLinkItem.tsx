import React from 'react';
import styled from 'styled-components';
import { Overline } from '../../../common/text/Overline';
import { SubTitle } from '../../../common/text/SubTitle';
import { getYoutubeImg } from '../utils/getYoutubeImg';
import TimeStamp from './TimeStamp';

const YoutubeLinkItem = () => {
  const timeList = ['3:15', '2:3:15'];
  const url = 'https://www.youtube.com/watch?v=bRQA51GleGY';
  return (
    <Container>
      <Image src={getYoutubeImg(url)} />
      <TextContainer>
        <SubTitle type="2">영상제목</SubTitle>
        <TimeList>
          {timeList.map((time, index) => (
            <TimeStamp key={index} url={url} time={time} />
          ))}
        </TimeList>
        <Overline className="link">{url}</Overline>
      </TextContainer>
    </Container>
  );
};

export default YoutubeLinkItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 382px;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 8px 0;
`;

const Image = styled.img`
  border-radius: 8px 8px 0px 0px;
  object-fit: cover;
  height: 165px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 8px 16px;
  .link {
    font-size: 10px;
    color: #999999;
  }
`;

const TimeList = styled.div`
  display: flex;
  margin: 8px 0 5px 0;
`;
