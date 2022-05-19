import React from 'react';

const useLocalStorageState = (key, initialValue) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : initialValue;
      }

      return initialValue;
    } catch (error) {
      console.log(error);

      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorageState;