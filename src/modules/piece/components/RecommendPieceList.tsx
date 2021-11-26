import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../app/rootReducer';
import PieceList from '../../../common/components/PieceList';
import { Caption } from '../../../common/text/Caption';
import { fetchMyPieceStart } from '../../myPage/utils/myPage.action';
import { selectMyPieceList } from '../../myPage/utils/myPage.reducer';

const RecommendPieceList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMyPieceStart());
  }, []);

  const pieceList = useSelector((state: RootState) => selectMyPieceList(state));

  return (
    <Container>
      <Recommend>
        <Caption className="location">부산대학교</Caption>
        <Caption>의 다른 사진도 구경해볼까요?</Caption>
      </Recommend>

      <PieceList list={pieceList} />
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
  margin: 16px;
`;
