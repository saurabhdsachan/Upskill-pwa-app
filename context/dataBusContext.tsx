import { useLocalObservable } from 'mobx-react';
import React, { createContext, useContext } from 'react';
import { createDataBusStore } from '../store/dataBusStore';

const DataBusContext = createContext(null);

export const DataBusProvider = ({ children }) => {
  const dataBusStore = useLocalObservable(createDataBusStore);

  return <DataBusContext.Provider value={dataBusStore}>{children}</DataBusContext.Provider>;
};
export const useDataBusStore = () => useContext(DataBusContext);
