import Content from '../Content';
import { useScrollToHash } from '../hooks/useActiveSection';

const HomePage = () => {
  useScrollToHash();
  return <Content />;
};

export default HomePage;
