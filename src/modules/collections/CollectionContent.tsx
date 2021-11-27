/* global kakao */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CollectionItemType, PieceItem } from '../myPage/utils/myPage.api';
import moment from 'moment';
import { Overline } from '../../common/text/Overline';
import PieceDetailItem from '../piece/components/PieceDetailItem';
import { Piece } from '../piece/utils/piece.interface';
function dateRange(startDate: string, endDate: string, steps = 1) {
  const dateArray = [];
  const currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    dateArray.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + steps);
  }
  return dateArray;
}
function avgLatLng(pieceList: PieceItem[]) {
  let latSum = 0;
  let lngSum = 0;
  pieceList.forEach((piece) => (latSum = latSum + piece.peice?.latitude));
  pieceList.forEach((piece) => (lngSum = lngSum + piece.peice?.longitude));
  return [latSum / pieceList.length, lngSum / pieceList.length];
}

interface CollectionContentProps {
  items: PieceItem[];
  startDate: string;
  endDate: string;
}
const CollectionContent = ({ items, startDate, endDate }: CollectionContentProps) => {
  const [current, setCurrent] = useState(0);
  const dateArr = dateRange(startDate, endDate);
  const [newList, setNewList] = useState(
    items.filter(
      (piece) =>
        moment(piece.peice.date).format('YYYY-MM-DD') === moment(startDate).format('YYYY-MM-DD')
    )
  );
  useEffect(() => {
    const container = document.getElementById('mapper');
    const options = {
      center: new window.kakao.maps.LatLng(avgLatLng(items)[0], avgLatLng(items)[1]),
      level: 20
    };
    const map = new window.kakao.maps.Map(container, options);
    newList.forEach((list) => {
      const markerPosition = new window.kakao.maps.LatLng(
        list.peice?.latitude,
        list.peice?.longitude
      );
      const marker = new window.kakao.maps.Marker({
        position: markerPosition
      });
      marker.setMap(map);
    });
  }, [current]);

  useEffect(() => {
    setNewList(
      items.filter(
        (piece) =>
          moment(piece.peice.date).format('YYYY-MM-DD') ===
          moment(dateArr[current]).format('YYYY-MM-DD')
      )
    );
    console.log('new', newList);
  }, [current]);
  return (
    <Container>
      <DateRange>
        {dateArr.map((date, index) => (
          <DateSelect key={index} selected={current === index} onClick={() => setCurrent(index)}>
            <Overline>{index + 1}일차</Overline>
            <DateText className="date">{moment(date).format('MM/DD')}</DateText>
          </DateSelect>
        ))}
      </DateRange>
      <Map id="mapper" />
      <Content>
        {newList.map((item, index) => {
          console.log('item' + item.peice);
          return (
            <Box key={index}>
              <TextArea>{item?.content}</TextArea>
              <PieceDetailItem piece={item.peice} />
            </Box>
          );
        })}
      </Content>
    </Container>
  );
};

export default CollectionContent;
const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;
const Map = styled.div`
  display: flex;
  min-height: 146px;
  margin: 16px;
  background: #ffffff;

  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 8px;
`;

const DateRange = styled.div`
  display: flex;
  overflow: scroll;
  height: 64px;
  min-height: 64px;
  /* border-bottom: 1px solid#CCCCCC; */
`;

const DateText = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #f45400;
`;
interface SelectProps {
  selected: boolean;
}
const DateSelect = styled.div<SelectProps>`
  height: 64px;
  width: 107px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .date {
    color: ${(props) => (props.selected ? '#f45400' : '#CCCCCC')};
  }
  border-bottom: ${(props) => (props.selected ? '1px solid #f45400' : '1px solid#CCCCCC')};
`;
const TextArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 16px;
`;
