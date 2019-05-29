import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setState(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return state;
};

export default useDebounce;
