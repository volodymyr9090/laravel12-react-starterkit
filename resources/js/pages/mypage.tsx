import React from 'react';
import Header from './header'

const Content = () => {
    return (
        <>
            <Header />
            <div className='my-20'>
                <div className="grid grid-cols-1 p-10">
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 p-4 gap-4">
                        <div className='grid grid-cols-1'>
                            <div className="flex md:w-5/12">
                                <div className="flex items-start space-x-6">
                                    <img
                                        src="https://growrk.com/hubfs/1214_Lock.svg"
                                        alt="SOC 2"
                                        className="w-4 h-4"
                                    />
                                    <span className="text-lg">SOC 2 TYPE 2 CERTIFIED</span>
                                </div>
                                <div className="flex items-start space-x-6">
                                    <img
                                        src="https://growrk.com/hubfs/1213_Yellow%20Ray.svg"
                                        alt="Ray"
                                        className="w-4 h-4"
                                    />
                                    <span className="text-lg">AUTOMATED FULL LIFECYCLE</span>
                                </div>
                            </div>
                            <div className="w-full md:w-full mt-6">
                                <h1 className="text-4xl font-bold">
                                    <span className="block">IT device lifecycle</span>
                                    <span className="block">management</span>
                                    <span className="block text-blue-600">on autopilot</span>
                                </h1>
                            </div>
                            <div className="w-full md:w-full mt-6">
                                <p className="text-2xl text-gray-700 leading-relaxed">
                                    Procure, configure, and deploy your IT devices. Store, reuse, and recycle your inventory, while saving on costs. All with unrivaled global reach across 150 countries.
                                </p>
                            </div>
                            <div className="w-full md:w-5/12 lg:w-5/12 mt-6">
                                <div className="flex justify-between">
                                    <a
                                        href="https://growrk.com/product-tour?hsLang=en"
                                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition-colors"
                                    >
                                        Take a product tour
                                    </a>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 mt-6">
                                <img
                                    src="https://growrk.com/hubfs/1198_Badges%20White%20BG-min.png"
                                    alt="Badges"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-1'>

                            <div className="w-full mt-6">
                                <section className="hero-badges-section">
                                    <div className="relative">
                                        <img
                                            src="https://growrk.com/hubfs/1199_Dashboard%20Hero%20Section-min.png"
                                            alt="IT devices hero"
                                            className="w-full h-auto object-cover"
                                        />

                                        {/* Badge for Uptime */}
                                        <div className="absolute top-0 left-0 p-4 bg-opacity-50 bg-black text-white">
                                            <div className="badge-title">99.9% Uptime</div>
                                            <div className="badge-subtitle">Global SLA</div>
                                        </div>

                                        {/* Badge for 24/7 Support */}
                                        <div className="absolute top-0 right-0 p-4 bg-opacity-50 bg-black text-white">
                                            <div className="badge-title">24/7 Support</div>
                                            <div className="badge-subtitle">Enterprise grade</div>
                                        </div>

                                        {/* Badge for 150+ Countries */}
                                        <div className="absolute bottom-0 left-0 p-4 bg-opacity-50 bg-black text-white">
                                            <div className="badge-title">150+ Countries</div>
                                            <div className="badge-subtitle">Global reach</div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;
