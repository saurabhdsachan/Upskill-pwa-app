import { useLocalObservable } from 'mobx-react';
import React, { createContext, useContext } from 'react';
import { createAuthStore } from '../store/authStore';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const authStore = useLocalObservable(createAuthStore);

  return <AuthContext.Provider value={authStore}>{children}</AuthContext.Provider>;
};
export const useAuthStore = () => useContext(AuthContext);
