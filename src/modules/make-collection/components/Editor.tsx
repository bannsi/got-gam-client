/*global kakao*/
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PieceDetailItem from '../../piece/components/PieceDetailItem';
import { Piece } from '../../piece/utils/piece.interface';
import moment from 'moment';
import { Overline } from '../../../common/text/Overline';
import { Collection } from '../utils/collection.interface';
import { select } from 'redux-saga/effects';
interface EditorProps {
  dayCount: number;
  selectList: Piece[];
  startDate: Date;
  endDate: Date;
  items: Collection[];
  setItems: (items: Collection[]) => void;
  title: string;
  setTitle: (title: string) => void;
}
declare global {
  interface Window {
    kakao: any;
  }
}
function dateRange(startDate: Date, endDate: Date, steps = 1) {
  const dateArray = [];
  const currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    dateArray.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + steps);
  }

  return dateArray;
}

const { kakao } = window;
const Editor = ({
  title,
  setTitle,
  items,
  setItems,
  selectList,
  startDate,
  endDate
}: EditorProps) => {
  const [current, setCurrent] = useState(0);
  const [newList, setNewList] = useState(
    selectList.filter(
      (piece) => moment(piece.date).format('YYYY-MM-DD') === moment(startDate).format('YYYY-MM-DD')
    )
  );
  const dateArr = dateRange(startDate, endDate);

  console.log(items);
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(avgLatLng(newList)[0], avgLatLng(newList)[1]),
      level: 6
    };
    const map = new kakao.maps.Map(container, options);
    selectList.forEach((list) => {
      const markerPosition = new kakao.maps.LatLng(list.latitude, list.longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition
      });
      marker.setMap(map);
    });
  }, []);
  useEffect(() => {
    setNewList(
      selectList.filter(
        (piece) =>
          moment(piece.date).format('YYYY-MM-DD') === moment(dateArr[current]).format('YYYY-MM-DD')
      )
    );
    newList.map((item, index) => {
      const newItems = items.filter((ele) => ele.peiceId !== item.peiceId);
      const newItem = items.filter((ele) => ele.peiceId === item.peiceId)[0];
      setItems([
        ...newItems,
        { date: newItem.date, content: newItem.content, peiceId: newItem.peiceId, orderNum: index }
      ]);
    });
  }, [current]);
  return (
    <Container>
      <Input
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
        placeholder="제목을 작성하세요"
      />
      <DateRange>
        {dateArr.map((date, index) => (
          <DateSelect key={index} selected={current === index} onClick={() => setCurrent(index)}>
            <Overline>{index + 1}일차</Overline>
            <DateText className="date">{moment(date).format('MM/DD')}</DateText>
          </DateSelect>
        ))}
      </DateRange>
      <Map id="map" />
      <Content>
        {newList.map((piece) => {
          const newItem = items.filter((ele) => ele.peiceId === piece.peiceId)[0];
          const newItems = items.filter((ele) => ele.peiceId !== piece.peiceId);
          return (
            <Box key={piece.peiceId}>
              <TextArea
                value={newItem.content}
                onKeyDown={(e: any) => {
                  e.target.style.height = 'inherit';
                  e.target.style.height = `${e.target.scrollHeight + 10}px`;
                }}
                onChange={(e: any) => {
                  setItems([
                    ...newItems,
                    {
                      ...newItem,
                      content: e.target.value
                    }
                  ]);
                }}
                placeholder="기록을 입력하세요."
              />
              <PieceDetailItem key={piece.peiceId} piece={piece} />
            </Box>
          );
        })}
      </Content>
    </Container>
  );
};

export default Editor;

function avgLatLng(pieceList: Piece[]) {
  let latSum = 0;
  let lngSum = 0;
  pieceList.forEach((piece) => (latSum = latSum + piece.latitude));
  pieceList.forEach((piece) => (lngSum = lngSum + piece.longitude));
  return [latSum / pieceList.length, lngSum / pieceList.length];
}
const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  ::placeholder {
    color: #cccccc;
  }
  border: none;
  outline: none;
  padding: 8px 16px;
`;

const TextArea = styled.textarea`
  display: flex;
  align-items: center;
  ::placeholder {
    color: #cccccc;
  }
  font-size: 14px;
  border: none;
  outline: none;
  width: 100%;
  margin-top: 16px;
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
const Map = styled.div`
  display: flex;
  min-height: 146px;
  margin: 16px;
  background: #ffffff;

  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

interface SelectProps {
  selected: boolean;
}
