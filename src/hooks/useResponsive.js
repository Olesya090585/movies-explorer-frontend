import { useState, useEffect, useCallback } from 'react';

function useResponsive() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResizeWindow = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const resizeTimeoutDelay = 300;
    let resizeTimeout;

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResizeWindow, resizeTimeoutDelay);
    });

    return () => {
      window.removeEventListener('resize', handleResizeWindow);
      clearTimeout(resizeTimeout);
    };
  }, [handleResizeWindow]);

  return [windowWidth];
}

export default useResponsive;
