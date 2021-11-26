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
}

const MakerHeader = ({ isCollection, form, setForm }: MakerHeaderProps) => {
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
          <ButtonText>선택</ButtonText>
        </SelectPieceHeader>
      )}
    </Container>
  );
};

export default MakerHeader;

const Container = styled.div`
  /* padding: 16px 24px; */
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
