<<<<<<< HEAD
import Navbar from './Navbar';
import React, { ReactNode } from 'react';
interface LayoutProps {
  children: ReactNode;
=======
import Navbar from './Navbar'
import React, { ReactNode } from 'react'
import Page from '../support/support'
import Kontakt from '../kontakt/kontakt'
interface LayoutProps {
  children: ReactNode
>>>>>>> abb4ce1 (New landing page)
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      {children}
    </div>
  );
};

export default Layout;
=======

      {children}
    </div>
  )
}

export default Layout
>>>>>>> abb4ce1 (New landing page)
