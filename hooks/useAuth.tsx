import { DEVICE_ID, TOKEN } from '@utils/constants';
import Cookies from 'js-cookie';
import { nanoid } from 'nanoid';

export default function useAuth() {
  const setDeviceId = () => {
    !Cookies.get(DEVICE_ID) && Cookies.set(DEVICE_ID, nanoid());
  };

  const login = ({ token, cb }: { cb: () => void; token: string }) => {
    Cookies.set(TOKEN, token);
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
