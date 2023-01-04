import '../styles/global.css';
import Footer from '@/components/Footer/Footer';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
