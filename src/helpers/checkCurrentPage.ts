import { useLocation } from '@reach/router';

export default function checkCurrentPage() {
  const location = useLocation();
  const { pathname } = location;
  return pathname === '/';
}
