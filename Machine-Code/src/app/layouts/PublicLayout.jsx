import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../shared/ui/components/Navbar';
import Footer from '../../shared/ui/components/Footer';

export const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-(--color-bg) flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center py-6 px-4 sm:px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;