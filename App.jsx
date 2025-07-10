import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import RegisterPage from './components/RegisterPage';
import PharmaSubjects from './Pages/PharmaSubjects';
import PharmaChapters from './Pages/PharmaChapters';
import SearchBar from './Pages/SearchBar';

const AppWrapper = () => {
  const location = useLocation();
  const [isLoginOpen, setLoginOpen] = useState(true);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  return (
    <>
      <Navbar />
      <SearchBar />

      {isLoginOpen && (
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setLoginOpen(false)}
          openRegister={() => {
            setLoginOpen(false);
            setRegisterOpen(true);
          }}
        />
      )}

      {isRegisterOpen && (
        <RegisterPage
          isOpen={isRegisterOpen}
          onClose={() => setRegisterOpen(false)}
          openLogin={() => {
            setRegisterOpen(false);
            setLoginOpen(true);
          }}
        />
      )}

      <Routes>
        <Route path="/" element={<PharmaSubjects />} />
        <Route path="/subject/:subjectSlug" element={<PharmaChapters />} />
      </Routes>

      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
