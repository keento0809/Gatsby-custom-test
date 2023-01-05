import { useContext } from 'react';
import { PathContext } from '@/context/pathContext';

const usePathContext = () => {
  const context = useContext(PathContext);
  if (!context) throw new Error('Invalid context');
  return context;
};

export default usePathContext;
