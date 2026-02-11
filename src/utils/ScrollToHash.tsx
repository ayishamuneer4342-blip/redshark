import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // If there is a hash, scroll to it
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); // Small delay to ensure render
            }
        }
        // If no hash, scroll to top (unless it's the same page, but key change handles path changes)
        else if (pathname !== '/') {
            // For non-home pages without hash, scroll to top
            window.scrollTo(0, 0);
        }
        else {
            // For home page without hash, explicitly scroll top
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, key]);

    return null;
};

export default ScrollToHash;
