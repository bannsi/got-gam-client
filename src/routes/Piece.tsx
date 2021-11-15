import React from 'react';
import { useParams } from 'react-router-dom';

const Piece = () => {
  const { pieceId } = useParams();
  return <div> piece : {pieceId}</div>;
};

export default Piece;
