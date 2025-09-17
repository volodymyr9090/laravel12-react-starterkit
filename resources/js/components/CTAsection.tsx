import React from 'react';

const CTASection: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Heading */}
                <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Equip. Scale. Be borderless.
                    </h2>
                </div>

                {/* Description */}
                <div className="mb-8">
                    <p className="text-xl text-gray-900">
                        Scale your global team by providing the equipment they need to succeed at the touch of a button.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                    <a
                        href="https://growrk.com/request-demo?hsLang=en"
                        className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
                    >
                        Request a demo
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;