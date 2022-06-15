import { DEVICE_ID, ROOT_URL, TOKEN } from '@utils/constants';
import Cookies from 'js-cookie';
import { nanoid } from 'nanoid';

const exp = 365;

const CookieOptions = {
  expires: exp,
  domain: process.env.NODE_ENV === 'production' ? '.pep.live' : 'localhost',
  path: '/',
};

function useAuth() {
  const setDeviceId = () => {
    Cookies.set(DEVICE_ID, nanoid(), CookieOptions);
  };

  const setUsername = (name) => {
    Cookies.set(ROOT_URL, name, CookieOptions);
  };

  const login = ({ token, cb }: { cb: () => void; token: string }) => {
    token && Cookies.set(TOKEN, token, CookieOptions);
    cb && cb();
  };

  const logout = (cb) => {
    Cookies.remove(TOKEN, CookieOptions);
    cb && cb();
  };

  return {
    login,
    logout,
    setDeviceId,
    setUsername,
  };
}

export default useAuth;
