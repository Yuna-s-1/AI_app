import { useState } from 'react';
import Layout from './components/Layout';
import { PageType } from './types';
import Home from './pages/Home';
import SocialTrack from './pages/SocialTrack';
import SpatialTrack from './pages/SpatialTrack';
import MyRecords from './pages/MyRecords';
import Profile from './pages/Profile';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'social': return <SocialTrack />;
      case 'spatial': return <SpatialTrack />;
      case 'records': return <MyRecords />;
      case 'profile': return <Profile />;
      default: return <Home />;
    }
  };

  return (
    <Layout currentPage={currentPage} setPage={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}
