import React from 'react';
import styled from 'styled-components';
import PieceList from '../../../common/components/PieceList';
import { Caption } from '../../../common/text/Caption';

const RecommendPieceList = () => {
  return (
    <Container>
      <Recommend>
        <Caption className="location">부산대학교</Caption>
        <Caption>의 다른 사진도 구경해볼까요?</Caption>
      </Recommend>

      <PieceList />
    </Container>
  );
};

export default RecommendPieceList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .location {
    color: #000000;
  }
`;
const Recommend = styled.div`
  display: flex;
  margin: 16px 0;
`;
