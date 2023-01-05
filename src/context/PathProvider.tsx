import checkCurrentPage from '@/helpers/checkCurrentPage';
import { useState } from 'react';
import { PathContext } from './pathContext';

interface Children {
  children: React.ReactNode;
}

const PathProvider = ({ children }: Children) => {
  const [isTopPage, setIsTopPage] = useState(checkCurrentPage());
  return (
    <PathContext.Provider value={{ isTopPage, setIsTopPage }}>
      {children}
    </PathContext.Provider>
  );
};

export default PathProvider;
