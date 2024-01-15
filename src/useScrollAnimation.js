import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
    const [elementVisibility, setElementVisibility] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            const animatedLeftElements = document.querySelectorAll('.animated-left');
            const animatedDownElements = document.querySelectorAll('.animated-down');
            const elementPositions = {};

            animatedLeftElements.forEach((element) => {
                const elementReact = element.getBoundingClientRect();
                const targetPosition = (elementReact.top - 300)*1.6;
                elementPositions[element.id] = scrollPosition > targetPosition;
            });

            animatedDownElements.forEach((element) => {
                const elementRect = element.getBoundingClientRect();
                const targetPosition = elementRect.top / 6;
                elementPositions[element.id] = scrollPosition > targetPosition;
            });

            setElementVisibility(elementPositions);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return elementVisibility;
};

export default useScrollAnimation;
