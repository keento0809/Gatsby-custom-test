import { createContext } from 'react';

interface PathContextInterface {
  isTopPage: boolean;
  setIsTopPage: (c: boolean) => void;
}

export const PathContext = createContext<PathContextInterface>({
  isTopPage: false,
  setIsTopPage: () => {},
});
