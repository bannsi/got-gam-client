import React from 'react';
import styled from 'styled-components';
import { Piece } from '../utils/piece.interface';

interface KeywordProps {
  piece: Piece;
}
const Keywords = ({ piece }: KeywordProps) => {
  return (
    <Container>
      {piece.keywords.map((key) => (
        <Keyword key={key}>{key}</Keyword>
      ))}
      {piece.whos.map((key) => (
        <Keyword key={key}>{key}</Keyword>
      ))}
    </Container>
  );
};

export default Keywords;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  background: #ffffff;
`;

const Keyword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: normal;
  margin: 2px 4px 2px 0;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 16px;
  height: 25px;
  border: 1px solid #f45400;
  color: #f45400;
`;
