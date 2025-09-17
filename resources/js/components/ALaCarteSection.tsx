import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player'

const ALaCarteSection: React.FC = () => {
    const handleCtaClick = () => {
        // Handle CTA button click - could open a modal, navigate to a page, etc.
        console.log('CTA button clicked');
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-100 to-yellow-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Column - Content */}
                    <div className="w-full md:w-5/12 mb-10 md:mb-0 md:pr-8">
                        <div className="mb-6">
                            <p className="text-gray-500 font-light text-md">
                                PAY ONLY FOR WHAT YOU USE
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-3xl md:text-4xl font-medium text-gray-600">
                                GroWrk A La Carte
                            </h2>
                        </div>

                        <div className="mb-8">
                            <p className="text-gray-500 font-light text-lg">
                                Use our platform for free to procure, retrieve, or store devices in 150+ countries and pay only for the services you need!
                            </p>
                        </div>

                        <div className="mt-8">
                            <button
                                onClick={handleCtaClick}
                                className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-8 rounded-4xl transition-colors duration-300"
                            >
                                Try A La Carte
                            </button>
                        </div>
                    </div>

                    {/* Spacer Column (replaced the 1/12 column with margin) */}
                    <div className="hidden md:block w-0 md:w-1/12"></div>

                    {/* Right Column - Lottie Animation */}
                    <div className="w-full md:w-6/12">
                        <div className="overflow-hidden">
                            {/* Lottie Player - you'll need to install a React Lottie component */}
                            <div
                                className="w-full h-64 md:h-96 bg-gray-100 flex items-center justify-center"
                                style={{
                                    background: 'transparent',
                                    // This is a placeholder - you'll want to use a proper Lottie component
                                }}
                            >
                                {/* <div className="text-center text-gray-500">
                                    <p className="mb-2">Lottie Animation Placeholder</p>
                                    <p className="text-sm">(Would show the actual animation in production)</p>
                                </div> */}


                                {/* In a real implementation, you would use a Lottie component like: */}
                                {/* <div style={{ width: '500px', height: '500px' }}> */}
                                <Player
                                    autoplay
                                    loop
                                    src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
                                    style={{ width: '100%', height: '100%' }}
                                />
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ALaCarteSection;