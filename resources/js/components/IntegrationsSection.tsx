import React from 'react';

const IntegrationsSection: React.FC = () => {
    return (
        <section id="section-integration" className="py-16 bg-gradient-to-b from-gray-700 to-gray-600 text-white"
            style={{
                background: 'linear-gradient(273deg, #f7ca2d - 6.12 %, #ffae1d 109.26 %)',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Left Column - Content */}
                    <div className="w-full lg:w-7/12 mb-10 lg:mb-0 lg:pr-12">
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="block">Streamline your existing</span>
                                <span className="block">workflows with</span>
                                <span className="block text-purple-300">our integrations</span>
                            </h2>
                        </div>

                        <div className="mb-8">
                            <p className="text-xl text-gray-200">
                                With 40+ integrations GroWrk automatically syncs with your current software and workflows to minimize friction or learning curves. Or use our API to build your own.
                            </p>
                        </div>

                        <div className="mt-8">
                            <a
                                href="https://growrk.com/product/integrations/?hsLang=en"
                                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>

                    {/* Right Column - GIF Image */}
                    <div className="w-full lg:w-5/12">
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src="https://growrk.com/hubfs/Website/integrations.gif"
                                alt="Integrations visualization showing various software integrations"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegrationsSection;