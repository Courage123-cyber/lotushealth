import { useCallback, useState } from 'react';

export const useToggle = (initial: boolean = false): [boolean, () => void, (next: boolean) => void] => {
  const [value, setValue] = useState<boolean>(initial);

  const toggle = useCallback(() => setValue((v) => !v), []);
  const set = useCallback((next: boolean) => setValue(next), []);

  return [value, toggle, set];
};

export default useToggle;


