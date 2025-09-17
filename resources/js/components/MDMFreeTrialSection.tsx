import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import { Player } from '@lottiefiles/react-lottie-player';

const MDMFreeTrialSection: React.FC = () => {
    const animationContainer = useRef<HTMLDivElement>(null);
    const lottieInstance = useRef<any>(null);

    useEffect(() => {
        const initializeLottie = async () => {
            try {
                // Dynamically import lottie-web for better performance
                const lottie = (await import('lottie-web')).default;

                if (animationContainer.current && !lottieInstance.current) {
                    // Initialize Lottie animation
                    lottieInstance.current = lottie.loadAnimation({
                        container: animationContainer.current,
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: 'https://lottie.host/f979daba-a772-4d4d-8db8-465ccfa87a22/Bntu2PIDre.lottie'
                    });

                    // Optional: Add hover play/pause
                    const container = animationContainer.current;
                    const playAnimation = () => lottieInstance.current.play();
                    const pauseAnimation = () => lottieInstance.current.pause();

                    container.addEventListener('mouseenter', playAnimation);
                    container.addEventListener('mouseleave', pauseAnimation);

                    // Cleanup event listeners on unmount
                    return () => {
                        container.removeEventListener('mouseenter', playAnimation);
                        container.removeEventListener('mouseleave', pauseAnimation);
                    };
                }
            } catch (error) {
                console.error('Error loading Lottie animation:', error);
            }
        };

        initializeLottie();

        // Cleanup animation on component unmount
        return () => {
            if (lottieInstance.current) {
                lottieInstance.current.destroy();
                lottieInstance.current = null;
            }
        };
    }, []);

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-medium text-gray-700 mb-6">
                        Try our MDM free of charge
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Give us your specs and requirements, and you will see how your employees can securely work from anywhere with zero-touch deployment, remote access, and SSO for MacOS, Windows, or Linux workstations.
                    </p>
                </div>

                {/* Lottie Animation */}
                <div className="flex justify-center mb-12">
                    <div
                        ref={animationContainer}
                        className="w-full max-w-2xl h-64 rounded-lg cursor-pointer"
                        role="img"
                        aria-label="Animation demonstrating MDM features"
                    />
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                        Start Free Trial
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MDMFreeTrialSection;