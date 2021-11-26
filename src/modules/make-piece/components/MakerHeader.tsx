import React from 'react';
import styled from 'styled-components';
import BackIcon from '../../../common/icons/BackIcon';
import { useNavigate } from 'react-router-dom';
import { Caption } from '../../../common/text/Caption';
import { ButtonText } from '../../../common/text/ButtonText';

interface MakerHeaderProps {
  form: number;
  setForm: (form: number) => void;
  isCollection?: boolean;
  isEditor?: boolean;
  onNext?: () => void;
}

const MakerHeader = ({ isCollection, isEditor, form, setForm, onNext }: MakerHeaderProps) => {
  const navigate = useNavigate();
  const onBack = () => {
    if (form == 0) {
      navigate(-1);
    } else {
      setForm(form - 1);
    }
  };
  return (
    <Container>
      <BackIcon onBack={onBack} />
      {isCollection && (
        <SelectPieceHeader>
          <Caption>조각 선택</Caption>
          <NextButton onClick={onNext}>
            <ButtonText>선택</ButtonText>
          </NextButton>
        </SelectPieceHeader>
      )}
      {isEditor && (
        <SelectPieceHeader>
          <Caption>조각 모음 기록</Caption>
          <NextButton onClick={onNext}>
            <ButtonText>완료</ButtonText>
          </NextButton>
        </SelectPieceHeader>
      )}
    </Container>
  );
};

export default MakerHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    width: 24px;
    height: 24px;
  }
`;

const SelectPieceHeader = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const NextButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
`;
