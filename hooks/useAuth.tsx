import { DEVICE_ID, TOKEN } from '@utils/constants';
import Cookies from 'js-cookie';
import { nanoid } from 'nanoid';

const exp = 365;

const CookieOptions = { expires: exp, domain: 'localhost', path: '/' };

function useAuth() {
  const setDeviceId = () => {
    Cookies.set(DEVICE_ID, nanoid(), CookieOptions);
  };

  const login = ({ token, cb }: { cb: () => void; token: string }) => {
    token && Cookies.set(TOKEN, token, CookieOptions);
    cb && cb();
  };

  const logout = (cb) => {
    Cookies.remove(TOKEN);
    cb && cb();
  };

  return {
    login,
    logout,
    setDeviceId,
  };
}

export default useAuth;
