import React from 'react';
import styled from 'styled-components';
import BackIcon from '../../../common/icons/BackIcon';
import { ButtonText } from '../../../common/text/ButtonText';
import { useNavigate } from 'react-router-dom';

interface MakerHeaderProps {
  form: number;
  setForm: (form: number) => void;
}

const MakerHeader = ({ form, setForm }: MakerHeaderProps) => {
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
