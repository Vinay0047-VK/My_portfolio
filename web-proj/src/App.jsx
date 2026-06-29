import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Header from './Header';
import Footer from './Footer';
import HomePage from './pages/HomePage';
import MyInterestsPage from './pages/MyInterestsPage';
import AcademicsPage from './pages/AcademicsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Background />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/my-interests" element={<MyInterestsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
