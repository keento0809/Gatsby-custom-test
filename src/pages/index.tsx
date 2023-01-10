import BottomContent from '@/components/features/MainContent/BottomContent';
import TopContent from '@/components/features/MainContent/TopContent';
import PathProvider from '@/context/PathProvider';
import Layout from '@/layouts/Layout';
import { graphql, StaticQueryDocument } from 'gatsby';
import SEO from '@/seo';

export default function Root() {
  return (
    <PathProvider>
      <Layout>
        <TopContent />
        <BottomContent />
      </Layout>
    </PathProvider>
  );
}

export const Head = () => <SEO />;
