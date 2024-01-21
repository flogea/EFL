import Cookies from 'js-cookie';

type CookieKeys =
  | 'refreshToken'
  | 'accessToken'
  | 'userId'
  | 'preAuthorizationToken'
  | 'recoveryToken';

type setCookieProps = {
  key: CookieKeys;
  value: string;
  timeInSec?: number;
};

export const setCookie = ({ key, value, timeInSec }: setCookieProps) => {
  let expires;
  if (timeInSec) {
    const now = new Date().getTime();
    expires = new Date(now + timeInSec * 1000);
  }
  Cookies.set(key, value, { expires: expires });
};

export const removeCookie = (key: CookieKeys) => Cookies.remove(key);

export const getCookie = (key: CookieKeys) => Cookies.get(key);

export const removeAuthorizationCookie = () => {
  removeCookie('refreshToken');
  removeCookie('accessToken');
  removeCookie('userId');
  removeCookie('preAuthorizationToken');
  removeCookie('recoveryToken');
};
