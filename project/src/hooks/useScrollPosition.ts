import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const SCROLL_POSITIONS = new Map<string, number>();

export const useScrollPosition = () => {
  const location = useLocation();
  const prevPathRef = useRef<string>(location.pathname);
  const isBackNavigationRef = useRef(false);

  useEffect(() => {
    // Detect if this is a back/forward navigation
    const handlePopState = () => {
      isBackNavigationRef.current = true;
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    // Save scroll position when leaving a page
    const handleSaveScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 0) {
        SCROLL_POSITIONS.set(prevPathRef.current, currentScroll);
      }
    };

    // Restore scroll position when returning to a page
    const handleRestoreScroll = () => {
      if (isBackNavigationRef.current) {
        const savedPosition = SCROLL_POSITIONS.get(location.pathname);
        if (savedPosition !== undefined) {
          // Use requestAnimationFrame to ensure the DOM is ready
          requestAnimationFrame(() => {
            window.scrollTo(0, savedPosition);
          });
        }
        isBackNavigationRef.current = false;
      } else {
        // For regular navigation (not back/forward), scroll to top
        window.scrollTo(0, 0);
      }
    };

    // Save current scroll position before updating
    handleSaveScroll();

    // Update previous path reference
    prevPathRef.current = location.pathname;

    // Handle scroll restoration
    handleRestoreScroll();

    // Clean up scroll position when component unmounts
    return () => {
      handleSaveScroll();
    };
  }, [location]);
};