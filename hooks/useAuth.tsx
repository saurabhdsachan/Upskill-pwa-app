import { TOKEN } from '@utils/constants';
import Cookies from 'js-cookie';
import { useState } from 'react';

export default function useAuth() {
  const [user, setUser] = useState<IUser>();
  const [isAuthed, setIsAuthed] = useState<boolean>(false);

  const login = ({ user, token }: { user: IUser; token: string }) => {
    setUser(user);
    setIsAuthed(true);
    Cookies.set(TOKEN, token);
  };

  const logout = () => {
    setUser(null);
    setIsAuthed(false);
    Cookies.remove(TOKEN);
  };

  return {
    user,
    login,
    logout,
  };
}
