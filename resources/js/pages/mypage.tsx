import React from 'react';
import Header from './header'
import LogoSlider from '@/components/LogoSlider';
import Solution from '@/components/Solution';
import TestimonialCarousel from '@/components/TestimonialCarousel'
import ALaCarteSection from '@/components/ALaCarteSection'
import GlobalReachSection from '@/components/GlobalReachSection'
import UnifiedPlatformSection from '@/components/UnifiedPlatformSection'
import IntegrationsSection from '@/components/IntegrationsSection';
import MDMFreeTrialSection from '@/components/MDMFreeTrialSection'
import CTAsection from '@/components/CTAsection';
import Footer from '@/components/Footer'

const Content = () => {
    return (
        <div>
            <Header />
            <div className='bg-gradient-to-br from-gray-200 to-yellow-50'>
                <div className='md:p-0 lg:p-40 lg:pt-25 lg:pb-0'>
                    <div className=''>
                        <div className="grid grid-cols-1 p-2">
                            <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 p-4 gap-10">
                                <div className='grid grid-cols-1 gap-y-5'>
                                    <div className="grid grid-cols-2">
                                        <div className="flex gap-2">
                                            <img
                                                src="https://growrk.com/hubfs/1214_Lock.svg"
                                                alt="SOC 2"
                                                className="w-4 h-4"
                                            />
                                            <span className="text-md">SOC 2 TYPE 2 CERTIFIED</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <img
                                                src="https://growrk.com/hubfs/1213_Yellow%20Ray.svg"
                                                alt="Ray"
                                                className="w-4 h-4"
                                            />
                                            <span className="text-md">AUTOMATED FULL LIFECYCLE</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <div className="text-5xl font-medium leading-tight">
                                            <span className="block text-gray-700">IT device lifecycle</span>
                                            <span className="block text-gray-700">management</span>
                                            <span className="block text-yellow-500">on autopilot</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <p className="text-2xl text-gray-700 leading-normal font-light">
                                            Procure, configure, and deploy your IT devices. Store, reuse, and recycle your inventory, while saving on costs. All with unrivaled global reach across 150 countries.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-10">
                                        <a
                                            href="https://growrk.com/product-tour?hsLang=en"
                                            className="text-center bg-yellow-500 hover:bg-yellow-700 text-white p-3 rounded-4xl text-lg"
                                        >
                                            Request a demo
                                        </a>
                                        <a
                                            href="https://growrk.com/product-tour?hsLang=en"
                                            className="text-center bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-4xl text-lg"
                                        >
                                            Take a product tour
                                        </a>
                                    </div>
                                    <div className="grid grid-cols-1">
                                        <img
                                            src="https://growrk.com/hubfs/1198_Badges%20White%20BG-min.png"
                                            alt="Badges"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 py-10'>

                                    {/* <div className="w-full mt-6"> */}
                                    <section className="hero-badges-section">
                                        <div className="relative">
                                            <img
                                                src="https://growrk.com/hubfs/1199_Dashboard%20Hero%20Section-min.png"
                                                alt="IT devices hero"
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                    </section>
                                    {/* </div> */}
                                </div>
                            </div>
                            <LogoSlider />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 px-40 py-20 pb-0'>
                <div className='flex flex-col text-center gap-y-3'>
                    <div className='text-5xl text-gray-700 font-semibold'>Transform your IT operations</div>
                    <div className='text-5xl font-semibold'>
                        <span className=' text-gray-700'>with </span>
                        <span className=' text-yellow-400'>automated solutions</span>
                    </div>
                    <div className='text-xl mt-5 text-gray-500 font-light'>Say goodbye to manual processes and hello to streamlined IT device management that scales with your global workforce.</div>
                </div>
                <Solution />
            </div>
            <TestimonialCarousel />
            <ALaCarteSection />
            <GlobalReachSection />
            <UnifiedPlatformSection />
            <IntegrationsSection />
            <MDMFreeTrialSection />
            <CTAsection />
            <Footer />
        </div>
    );
};

export default Content;
