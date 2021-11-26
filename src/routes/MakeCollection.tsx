import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../app/rootReducer';
import DateRangePick from '../modules/make-collection/components/DateRangePick';
import PieceSelector from '../modules/make-collection/components/PieceSelector';
import CoverPick from '../modules/make-collection/components/CoverPick';
import MakerHeader from '../modules/make-piece/components/MakerHeader';
import { fetchMyPieceStart } from '../modules/myPage/utils/myPage.action';
import { selectMyPieceList } from '../modules/myPage/utils/myPage.reducer';
import { Piece } from '../modules/piece/utils/piece.interface';
import Editor from '../modules/make-collection/components/Editor';
import { useNavigate } from 'react-router-dom';

const MakeCollection = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(0);
  const [selectList, setSelectList] = useState<Piece[]>([]);
  const [selectedCover, setSelectedCover] = useState<string>('');
  const [dayCount, setDayCount] = useState(1);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const onNext = () => {
    setForm(form + 1);
  };
  const onSubmit = () => {
    navigate('/');
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMyPieceStart());
  }, []);

  const pieceList = useSelector((state: RootState) => selectMyPieceList(state));

  const formList = [
    {
      element: (
        <PieceSelector selectList={selectList} setSelectList={setSelectList} list={pieceList} />
      )
    },
    {
      element: (
        <DateRangePick
          dayCount={dayCount}
          setDayCount={setDayCount}
          date={date}
          setDate={setDate}
          onNext={onNext}
        />
      )
    },
    {
      element: (
        <CoverPick
          selectList={selectList}
          selectedCover={selectedCover}
          setSelectedCover={setSelectedCover}
          onNext={onNext}
        ></CoverPick>
      )
    },
    {
      element: <Editor dayCount={dayCount} selectList={selectList} />
    }
  ];
  return (
    <Container>
      <MakerHeader
        isCollection={form === 0}
        isEditor={form === 3}
        setForm={setForm}
        form={form}
        onNext={form === 0 ? onNext : form === 3 ? onSubmit : undefined}
      />
      <ElementContainer>{formList[form].element}</ElementContainer>
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
  /* padding: 16px; */
`;
