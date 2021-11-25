import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { kakaoLogin } from '../modules/login/utils/kakaoLogin';
const LoginRedirect = () => {
  const navigator = useNavigate();
  // 인가코드
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    if (code) {
      kakaoLogin(code, navigator);
    }
  }, []);
  return <div></div>;
};

export default LoginRedirect;
