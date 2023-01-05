import MainContent from '@/components/features/MainContent';
import BottomContent from '@/components/features/MainContent/BottomContent';
import TopContent from '@/components/features/MainContent/TopContent';
import Layout from '@/layouts/Layout';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <Layout>
      <TopContent />
      <BottomContent />
    </Layout>
  );
}
