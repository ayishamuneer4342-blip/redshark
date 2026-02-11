import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in';
    delay?: number;
    duration?: number;
    className?: string;
    style?: React.CSSProperties;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 0.6,
    className = '',
    style = {}
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Immediate check for intersection support
        if (!('IntersectionObserver' in window)) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                // Reduced rootMargin to trigger sooner
                rootMargin: '0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const combinedStyle: React.CSSProperties = {
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}s`,
        willChange: 'opacity, transform',
        ...style
    };

    return (
        <div
            ref={ref}
            className={`reveal-item ${animation} ${isVisible ? 'visible' : ''} ${className}`}
            style={combinedStyle}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
