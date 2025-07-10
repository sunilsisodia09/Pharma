import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaBell,
  FaSearch,
  FaChevronDown,
} from 'react-icons/fa';
import LoginModal from './LoginModal';
import './Navbar.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (menu) =>
    setDropdown(dropdown === menu ? null : menu);

  const handleCloseSearch = () => {
    setSearchQuery('');
    setShowSearch(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  return (
    <div className="navbar">
      {/* ---------- Top Bar ---------- */}
      <div className="top-navbar">
        <div className="hamburger-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* desktop left */}
   <div className="nav-left desktop-only">
  {[ 'Practical', 'Jobs'].map((item) => (
    <div
      key={item}
      className="dropdown-trigger"
      onClick={() => toggleDropdown(item)}
    >
      <div className="trigger-label">
        {item}
        <FaChevronDown
          className={`dropdown-icon ${dropdown === item ? 'rotated' : ''}`}
        />
      </div>

      {dropdown === item && (
        <div className="dropdown-menu">
          <div className="dropdown-header">Explore {item}</div>

          {item === 'Jobs' ? (
            <>
              <div>Pharmacovigilance</div>
              <div>Clinical Research</div>
              <div>Quality Assurance / Quality Control</div>
              <div>Regulatory Affairs</div>
              <div>Medical Representative</div>
              <div>Drug Safety Associate</div>
            </>
          ) : (
            <>
              <div>{item} 1</div>
              <div>{item} 2</div>
              <div>{item} 3</div>
            </>
          )}
        </div>
      )}
    </div>
  ))}
</div>


        {/* logo */}
        <div className="nav-logo">PharmaGyaan</div>

        {/* desktop right */}
        <div className="nav-right">
          <div className="desktop-only">
            {showSearch ? (
              <div className="search-box-1">
                <FaSearch className="icon-left" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaTimes className="icon-right" onClick={handleCloseSearch} />
              </div>
            ) : (
              <FaSearch
                className="icon"
                onClick={() => setShowSearch(true)}
              />
            )}
          </div>

          <FaBell className="icon" onClick={() => setShowLogin(true)} />
          <button
            className="sign-in-btn-1"
            onClick={() => setShowLogin(true)}
          >
            Sign In
          </button>
        </div>
      </div>

      {/* ---------- Sub-nav strip removed ---------- */}

      {/* ---------- Sidebar & backdrop ---------- */}
      {menuOpen && (
        <div className="sidebar-backdrop" onClick={toggleMenu}></div>
      )}

      <div className={`sidebar ${menuOpen ? 'show' : ''}`}>
        {/* Close icon inside sidebar */}
        <div className="sidebar-close-icon" onClick={toggleMenu}>
          <FaTimes />
        </div>

        <div className="nav-left">
  {['Practicals', 'Jobs'].map((item) => (
    <div
      key={item}
      className="dropdown-trigger"
      onClick={() => toggleDropdown(item)}
    >
      <div className="trigger-label">
        {item}
        <FaChevronDown
          className={`dropdown-icon ${dropdown === item ? 'rotated' : ''}`}
        />
      </div>

      {dropdown === item && (
        <div className="dropdown-menu">
          <div className="dropdown-header">Explore {item}</div>

          {item === 'Practice' ? (
            <>
              <div>1st Year Practicals</div>
              <div>2nd Year Practicals</div>
              <div>3rd Year Practicals</div>
              <div>4th Year Practicals</div>
            </>
          ) : item === 'Jobs' ? (
            <>
              <div>Pharmacovigilance</div>
              <div>Clinical Research</div>
              <div>Regulatory Affairs</div>
              <div>Quality Control & Assurance</div>
              <div>Production & Manufacturing</div>
            </>
          ) : (
            <>
              <div>{item} 1</div>
              <div>{item} 2</div>
              <div>{item} 3</div>
            </>
          )}
        </div>
      )}
    </div>
  ))}
</div>

        {/* Sidebar search */}
        {showSearch && (
          <div className="search-box-1" style={{ width: '100%' }}>
            <FaSearch className="icon-left" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaTimes className="icon-right" onClick={handleCloseSearch} />
          </div>
        )}
      </div>

      {/* ---------- Login Modal ---------- */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      />
    </div>
  );
};

export default Navbar;
