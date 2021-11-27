import React from 'react';
import styled from 'styled-components';
import LinkItem from './LinkItem';
import YoutubeLinkItem from './YoutubeLinkItem';

const LinkList = () => {
  return (
    <Container>
      <LinkItem url={'https://jsksoft.tistory.com/16772'} />
      <YoutubeLinkItem />
      <LinkItem url={'https://iriseun.tistory.com/92'} />
    </Container>
  );
};

export default LinkList;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`;
