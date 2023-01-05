import { createContext, useContext, useState } from 'react';

interface PathContextInterface {
  isTopPage: boolean;
  setIsTopPage: (c: boolean) => void;
  //   handleSetIsTopPage: (c: boolean) => void;
}

export const PathContext = createContext<PathContextInterface>({
  isTopPage: false,
  setIsTopPage: () => {},
  //   handleSetIsTopPage: () => {},
});

export const usePathContext = () => {
  const context = useContext(PathContext);
  if (!context) throw new Error('Invalid context');
  return context;
};
