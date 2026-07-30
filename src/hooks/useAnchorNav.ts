import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Smooth-scrolls to an in-page anchor (e.g. "#pricing"). If the visitor is on
 * a different route (checkout, a policy page), it navigates home first and
 * lets the browser's native hash scroll (plus our scroll-margin-top CSS)
 * bring the section into view under the sticky header.
 */
export function useAnchorNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (href: string) => {
      if (location.pathname !== '/') {
        navigate(`/${href}`);
        return;
      }
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', href);
      } else {
        navigate(href);
      }
    },
    [location.pathname, navigate],
  );
}
