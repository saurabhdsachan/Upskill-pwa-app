import { TOKEN } from '@utils/constants';
import Cookies from 'js-cookie';

export default function useAuth() {
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
  };
}
