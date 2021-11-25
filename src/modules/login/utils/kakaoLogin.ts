import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { tokenStore } from '../../../app/tokenStore';

export const kakaoLogin = async (code: string, navigator: NavigateFunction) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `http://52.79.130.111:5555/accounts/v1/kakao/login/?code=${code}`
    });
    const TOKEN = res.data.body;
    tokenStore.save(TOKEN);
    console.log(res);
    await navigator('/');
  } catch (error) {
    console.log('소셜 로그인 에러');
    await navigator('/login');
  }
};
