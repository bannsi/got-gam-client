import React from 'react';
import styled from 'styled-components';
import { Caption } from '../../text/Caption';
import { SubTitle } from '../../text/SubTitle';

const FollowInfo = () => {
  return (
    <Container>
      <div className="item">
        <SubTitle className="number" type="1">
          1
        </SubTitle>
        <Caption className="title">팔로우</Caption>
      </div>
      <div className="item">
        <SubTitle className="number" type="1">
          3
        </SubTitle>
        <Caption className="title">팔로잉</Caption>
      </div>
      <div className="item">
        <SubTitle className="number" type="1">
          4
        </SubTitle>
        <Caption className="title">조각</Caption>
      </div>
    </Container>
  );
};

export default FollowInfo;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 16px;
  height: 74px;
  background: #f7f7f7;
  border-radius: 8px;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      color: #999999;
    }
    .number {
      color: #666666;
    }
  }
`;
