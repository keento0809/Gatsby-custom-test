import { useState } from 'react';
import { PathContext } from './pathContext';

interface Children {
  children: React.ReactNode;
}

const PathProvider = ({ children }: Children) => {
  const [isTopPage, setIsTopPage] = useState(false);
  //   const handleSetIsTopPage = () => {
  //     setIsTopPage(!isTopPage);
  //   };
  return (
    <PathContext.Provider value={{ isTopPage, setIsTopPage }}>
      PathProvider
    </PathContext.Provider>
  );
};

export default PathProvider;
