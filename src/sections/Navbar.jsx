import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from '../contexts/ThemeContext';

function Navigation({ isMobile = false, onNavigate, theme }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    onNavigate?.();
  };

  return (
    <ul className={`${isMobile ? 'flex flex-col space-y-4 p-4' : 'hidden sm:flex space-x-6'}`}>
      {navItems.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
            }`}
            onClick={(e) => handleClick(e, item.id)}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function HireMeButton({ theme, onNavigate }) {
  return (
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        onNavigate?.();
      }}
      className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
        theme === "dark"
          ? "bg-white text-slate-900 hover:bg-slate-200"
          : "bg-slate-900 text-white hover:bg-slate-700"
      }`}
    >
      Hire Me
    </a>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const mobile = window.innerWidth < 640; // sm breakpoint
        setIsMobile(mobile);
        if (!mobile) {
          setIsOpen(false);
        }
      };

      // Set initial value
      handleResize();

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed inset-x-0 z-20 w-full backdrop-blur-lg transition-colors duration-300 ${
        theme === 'dark' ? 'bg-primary/40' : 'bg-white/70 border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className={`text-xl font-bold transition-colors ${
              theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-slate-800 hover:text-black'
            }`}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              if (isMobile) setIsOpen(false);
            }}
          >
            Priyanshu
          </a>
          
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden sm:block">
              <Navigation theme={theme} />
            </div>

            <div className="hidden sm:block">
              <HireMeButton theme={theme} />
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full focus:outline-none transition-colors ${
                theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' : 'text-slate-700 hover:bg-slate-200'
              }`}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md focus:outline-none transition-colors ${
                  theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' : 'text-slate-700 hover:bg-slate-200'
                }`}
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`sm:hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white border-t border-slate-200/60'}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Navigation isMobile theme={theme} onNavigate={() => setIsOpen(false)} />
              <div className="px-4 pb-3">
                <HireMeButton theme={theme} onNavigate={() => setIsOpen(false)} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
