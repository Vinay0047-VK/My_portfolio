import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Cards.jsx';
import { useActiveSection } from './hooks/useActiveSection';

const HOME_NAV = [
  { id: 'home', label: 'Home', to: '/#home' },
  { id: 'about', label: 'About', to: '/#about' },
  { id: 'projects', label: 'Projects', to: '/#projects' },
  { id: 'contact', label: 'Contact', to: '/#contact' },
];

const ACADEMICS_NAV = {
  id: 'academics',
  label: 'Academics',
  to: '/academics',
};

const INTERESTS_NAV = {
  id: 'interests',
  label: 'My Interests',
  to: '/my-interests',
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isInterestsPage = location.pathname === '/my-interests';
  const isAcademicsPage = location.pathname === '/academics';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isActive = (id) => {
    if (id === 'interests') return isInterestsPage;
    if (id === 'academics') return isAcademicsPage;
    return isHome && activeSection === id;
  };

  const allNavItems = [...HOME_NAV, ACADEMICS_NAV, INTERESTS_NAV];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <nav className="navbar">
        <Link to="/#home" onClick={closeMobileMenu}>
          <Card />
        </Link>

        <button
          className={isMobileMenuOpen ? 'hamburger active' : 'hamburger'}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {allNavItems.map((item) => (
            <li key={item.id} className={isActive(item.id) ? 'nav-active' : ''}>
              <Link to={item.to} onClick={closeMobileMenu}>
                {item.label}
                {isActive(item.id) && (
                  <motion.span
                    className="nav-indicator"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
