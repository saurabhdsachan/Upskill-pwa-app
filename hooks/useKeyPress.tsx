import { useCallback, useEffect, useState } from 'react';

const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  const downHandler = useCallback(
    ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    },
    [targetKey]
  );

  const upHandler = useCallback(
    ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    },
    [targetKey]
  );

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [downHandler, upHandler]);

  return keyPressed;
};

export default useKeyPress;
