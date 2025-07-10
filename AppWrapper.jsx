import React from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SearchBar from './SearchBar';
import PharmaSubjects from '../Pages/PharmaSubjects';
import PharmaChapters from '../Pages/PharmaChapters';
import ProtectedRoute from './ProtectedRoute'; // ✅ Import

const AppWrapper = () => {
  const [searchParams] = useSearchParams();
  const isMinimal = searchParams.get('minimal') === 'true';

  return (
    <>
      {!isMinimal && <Navbar />}
      {!isMinimal && <SearchBar />}

      <Routes>
        <Route path="/" element={<PharmaSubjects />} />
        <Route
          path="/subject/:subjectSlug"
          element={
            <ProtectedRoute>
              <PharmaChapters />
            </ProtectedRoute>
          }
        />
        {/* Optional: add login route */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>

      {!isMinimal && <Footer />}
    </>
  );
};

export default AppWrapper;
