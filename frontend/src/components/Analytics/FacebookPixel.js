import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FacebookPixel = () => {
  const location = useLocation();

  useEffect(() => {
    // Track PageView on route changes
    try {
      if (window.fbq) {
        window.fbq('track', 'PageView');
      }
    } catch (error) {
      // Silently handle errors when fbq is blocked
      console.debug('Facebook Pixel tracking unavailable');
    }
  }, [location]);

  return null;
};

export default FacebookPixel;
