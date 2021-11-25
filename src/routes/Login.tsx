import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
      <Logo src="./logo.png"></Logo>
      <LogIn
        href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_LOGIN_APP_KEY}&redirect_uri=http://localhost:3000/login/kakao/`}
      >
        <img src="./kakaologin.png" />
      </LogIn>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.img`
  position: absolute;
  width: 48px;
  top: 40%;
`;
const LogIn = styled.a`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 24px;
  padding: 16px;
  img {
    width: 100%;
  }
`;
