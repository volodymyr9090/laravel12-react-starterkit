import React from 'react';

interface Feature {
    icon: string;
    title: string;
    description: string;
    alt: string;
}

const UnifiedPlatformSection: React.FC = () => {
    const features: Feature[] = [
        {
            icon: "https://growrk.com/hs-fs/hubfs/chub_backup/948_Recycle%20icon.png?width=40&height=39&name=948_Recycle%20icon.png",
            title: "Full Lifecycle Management",
            description: "Two-click offboarding, device retrievals, and redeployments via our global warehouses. At end-of-life, recycle, resell, or dispose in platform.",
            alt: "Recycle icon"
        },
        {
            icon: "https://growrk.com/hubfs/Shield.svg",
            title: "Security & Compliance",
            description: "SOC 2 Type 2 certified, with independent audits of controls and data protection to keep your organization safe.",
            alt: "Shield"
        },
        {
            icon: "https://growrk.com/hubfs/Gear.svg",
            title: "GroWrk Support",
            description: "Our team handles urgent issues worldwide, while the AI help desk covers platform questions, order status, and technical troubleshooting.",
            alt: "Gear"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-700 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-left mb-12">
                    <div className="mb-4">
                        <p className="text-yellow-400 font-semibold text-lg">
                            A UNIFIED PLATFORM
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="block">One remote hardware</span>
                            <span className="">platform to run </span>
                            <span className="text-yellow-400">faster, safely</span>
                        </h2>
                    </div>

                    <div className="mt-8">
                        <a
                            href="https://growrk.com/product?hsLang=en"
                            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-3 px-8 rounded-4xl transition-colors duration-300"
                        >
                            Find out more
                        </a>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {features.map((feature, index) => (
                        <div key={index} className="border-l-4 border-gray-500 pl-6 py-2">
                            <div className="mb-4">
                                <img
                                    src={feature.icon}
                                    alt={feature.alt}
                                    className="w-10 h-10 object-contain"
                                    loading="lazy"
                                />
                            </div>

                            <h3 className="text-xl font-bold mb-4">
                                {feature.title}
                            </h3>

                            <p className="text-lg text-gray-200 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UnifiedPlatformSection;