import React, { useState } from 'react';

import ThemeToggle from '../components/ThemeToggle';

import logo from '../images/logo-v1.jpeg';

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
          <img src={logo} width={100} /> 
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
