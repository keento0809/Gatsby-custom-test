import '../styles/global.css';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Link, useStaticQuery, graphql } from 'gatsby';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  console.log(data);
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
