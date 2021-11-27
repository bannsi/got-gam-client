import React, { useEffect } from 'react';
import styled from 'styled-components';
import { RootState } from '../app/rootReducer';
import { selectCollection } from '../modules/make-collection/utils/collection.reducer';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectCollectionById } from '../modules/myPage/utils/myPage.reducer';
import Header from '../modules/collections/components/Header';
const Collection = () => {
  const createdCollection = useSelector((state: RootState) => selectCollection(state));
  const navigate = useNavigate();
  const { collectionId } = useParams();
  const collection = collectionId
    ? useSelector((state: RootState) => selectCollectionById(state, parseInt(collectionId)))
    : null;

  useEffect(() => {
    if (createdCollection) {
      navigate(`/collection/${createdCollection.id}`);
    }
    if (!collection && !createdCollection) {
      navigate('/');
    }
  }, []);
  return collection ? (
    <Container>
      <Header collection={collection}></Header>
    </Container>
  ) : createdCollection ? (
    <Container></Container>
  ) : (
    <></>
  );
};

export default Collection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
`;
