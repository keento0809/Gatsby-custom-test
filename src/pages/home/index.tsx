import MainContent from '@/components/features/MainContent';
import BasicModal from '@/components/Modals/BasicModal';
import Layout from '@/layouts/Layout';

const Home = () => {
  return (
    <Layout>
      <BasicModal />
      <MainContent />
    </Layout>
  );
};

export default Home;
