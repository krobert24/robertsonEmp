import React, { ReactNode } from 'react';
import Footer from './Footer';

import './Layout.css'; // Import a separate CSS file for styling

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="layout-content">
        {/* Navigation links at the top */}
       

        {/* Main content */}
        {children}
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;