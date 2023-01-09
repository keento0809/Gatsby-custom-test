import BottomContent from '@/components/features/MainContent/BottomContent';
import TopContent from '@/components/features/MainContent/TopContent';
import PathProvider from '@/context/PathProvider';
import Layout from '@/layouts/Layout';
import { graphql, StaticQueryDocument } from 'gatsby';
import SEO from '@/seo';

export default function Root({ data }: any) {
  console.log(data.site.siteMetadata);
  return (
    <PathProvider>
      <Layout>
        <TopContent />
        <BottomContent />
      </Layout>
    </PathProvider>
  );
}

export const query: StaticQueryDocument = graphql`
  query siteInfo {
    site {
      siteMetadata {
        description
        title
        copyright
      }
    }
  }
`;

export const Head = () => <SEO />;
