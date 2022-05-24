import { createSlotsStore } from '@store/slotsStore';
import { useLocalObservable } from 'mobx-react';
import React, { createContext, useContext } from 'react';

const SlotsContext = createContext(null);

export const SlotProvider = ({ children }) => {
  const slotsStore = useLocalObservable(createSlotsStore);

  return <SlotsContext.Provider value={slotsStore}>{children}</SlotsContext.Provider>;
};
export const useSlotsStore = () => useContext(SlotsContext);
