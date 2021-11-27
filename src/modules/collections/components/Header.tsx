import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CollectionItemType } from '../../myPage/utils/myPage.api';
import WhiteBackIcon from '../../../common/icons/WhiteBackIcon';
import { Overline } from '../../../common/text/Overline';
import moment from 'moment';
import { RootState } from '../../../app/rootReducer';
import { useSelector } from 'react-redux';
import { selectMyInfo } from '../../myPage/utils/myPage.reducer';
interface HeaderProps {
  collection: CollectionItemType;
}

const Header = ({ collection }: HeaderProps) => {
  const navigate = useNavigate();
  const myInfo = useSelector((state: RootState) => selectMyInfo(state));
  return (
    <Container style={{ backgroundImage: `url(${collection.coverImage})` }}>
      <BackContainer>
        <WhiteBackIcon onBack={() => navigate(-1)} />
      </BackContainer>
      <TextContainer>
        <Title>{collection.title}</Title>
        <Overline>{`${moment(collection.startDate).format('YYYY.MM.DD')}~${moment(
          collection.endDate
        ).format('YYYY.MM.DD')}`}</Overline>
        <Profile>
          <ProfileImg src={'../쥬니.png'} />
          <span>{myInfo.nickname}</span>
        </Profile>
      </TextContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: contain;
  background-size: cover;
  height: 240px;
  min-height: 240px;
`;

const BackContainer = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  color: #ffffff;
`;
const Title = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
`;

const Profile = styled.div`
  display: flex;
  margin-top: 13px;
`;
const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  margin-right: 8px;
  border: 1px solid #ffffff;
`;
