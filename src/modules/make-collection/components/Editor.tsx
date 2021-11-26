/*global kakao*/
import React, { useEffect } from 'react';
import styled from 'styled-components';
import PieceDetailItem from '../../piece/components/PieceDetailItem';
import { Piece } from '../../piece/utils/piece.interface';
interface EditorProps {
  dayCount: number;
  selectList: Piece[];
}
declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;
const Editor = ({ selectList }: EditorProps) => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(avgLatLng(selectList)[0], avgLatLng(selectList)[1]),
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
  return (
    <Container>
      <Input placeholder="제목을 작성하세요" />
      <Map id="map" />
      <Content>
        {selectList.map((piece) => (
          <>
            <TextArea
              onKeyDown={(e: any) => {
                e.target.style.height = 'inherit';
                e.target.style.height = `${e.target.scrollHeight + 10}px`;
                // In case you have a limitation
                // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
              }}
              placeholder="기록을 입력하세요."
            />
            <PieceDetailItem key={piece.peiceId} piece={piece} />
          </>
        ))}
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
`;

const Map = styled.div`
  display: flex;
  /* width: calc(100% - 32px); */
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
