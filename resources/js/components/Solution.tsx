import React, { useState } from 'react';

interface Tab {
    id: string;
    title: string;
    icon: string;
    problem: {
        title: string;
        description: string;
        icon: string;
    };
    solution: {
        title: string;
        items: string[];
        icon: string;
    };
    position: string;
}

const ChallengesSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('security');

    const tabs: Tab[] = [
        {
            id: 'manual',
            title: 'Time‑intensive and manual IT processes',
            icon: `<path d="M20.61,9.02C19.87,3.35,14.68-.65,9.01.09,3.85.76,0,5.16,0,10.36c-.01,2.85,1.16,5.57,3.24,7.51.79.73,1.82,1.13,2.89,1.11h8.42c1.13,0,2.22-.44,3.03-1.23,2.33-2.27,3.46-5.51,3.03-8.74ZM16.38,16.52c-.49.48-1.14.75-1.82.74H6.13c-.63.01-1.24-.22-1.71-.64-1.73-1.62-2.71-3.89-2.7-6.26,0-2.46,1.05-4.79,2.88-6.43,1.57-1.42,3.62-2.2,5.73-2.19.34,0,.68.02,1.01.06,4.73.55,8.11,4.83,7.57,9.55-.23,1.96-1.12,3.79-2.54,5.17h0ZM6.73,14.06c.34.33.35.88.01,1.22-.33.34-.88.35-1.22.01h0c-2.72-2.67-2.77-7.03-.10-9.76,1.30-1.32,3.07-2.07,4.92-2.07.33,0,.66.02,.99.07.47.07.80.51.73.98,0,0,0,0,0,0-.06.47-.49.80-.96.73,0,0-.01,0-.02,0-2.83-.40-5.45,1.56-5.85,4.39-.23,1.63.32,3.27,1.50,4.42h0ZM17.18,9.38c.05.33.07.66.07.99,0,1.86-.74,3.64-2.08,4.93-.34.33-.89.33-1.22-.01-.33-.34-.33-.89.01-1.22,1.18-1.15,1.74-2.80,1.50-4.43-.07-.47.26-.91.73-.98.47-.07.91.26.98.73h0ZM12.01,9.92c.26.93-.29,1.90-1.22,2.16-.93.26-1.90-.29-2.16-1.22-.26-.93.29-1.90,1.22-2.16.31-.09.63-.09.94,0l3.26-3.26c.33-.34.88-.35,1.22-.02.34.33.35.88.02,1.22,0,0-.01.01-.02.02l-3.26,3.26Z"></path>`,
            problem: {
                title: 'Time‑intensive and manual IT processes?',
                description: 'Manual device management creates bottlenecks and increases deployment time',
                icon: 'https://growrk.com/hubfs/Red_Clock.svg'
            },
            solution: {
                title: 'Our Solution',
                items: [
                    'Procure, deploy, and recover equipment with a couple of clicks',
                    'Automate your entire device lifecycle',
                    'Reduce deployment time from weeks to days'
                ],
                icon: 'https://growrk.com/hubfs/Ray.svg'
            },
            position: 'left'
        },
        {
            id: 'global',
            title: 'Struggling with global device deployment',
            icon: `<path d="M10.93,18.45v-3.32c0-.67-.27-1.31-.74-1.78-.47-.47-1.11-.74-1.78-.74h-2.25c-.11,0-.22-.02-.32-.06-.10-.04-.19-.10-.27-.18l-3.75-3.75c.24-1.37.82-2.65,1.68-3.74s1.98-1.95,3.25-2.50c1.27-.55,2.67-.78,4.05-.66,1.38.12,2.72.58,3.88,1.34l-.19.19c-.08.08-.19.12-.30.12h-1.16c-.56,0-1.09.22-1.49.62-.39.39-.62.93-.62,1.49v.84c0,.11-.04.22-.12.30s-.19.12-.30.12c-.56,0-1.09.22-1.49.62-.39.39-.62.93-.62,1.49v.42c0,.67.27,1.31.74,1.78.47.47,1.11.74,1.78.74h2.52c.22,0,.44.09.59.25.16.16.25.37.25.59v.81c0,.56.22,1.09.62,1.49l1.12,1.12c-1.37,1.37-3.17,2.23-5.10,2.42ZM1.72,10.90l2.65,2.65c.23.24.51.42.82.55.31.13.63.19.97.19h2.25c.22,0,.44.09.59.25.16.16.25.37.25.59v3.32c-1.93-.20-3.74-1.06-5.11-2.43-1.37-1.38-2.22-3.19-2.41-5.12ZM18.49,10.09c0,1.65-.49,3.26-1.40,4.63l-1-1c-.08-.08-.12-.19-.12-.30v-.81c0-.67-.27-1.31-.74-1.78-.47-.47-1.11-.74-1.78-.74h-2.52c-.22,0-.44-.09-.59-.25-.16-.16-.25-.37-.25-.59v-.42c0-.11.04-.22.12-.30.08-.08.19-.12.30-.12.56,0,1.09-.22,1.49-.62.39-.39.62-.93.62-1.49v-.84c0-.11.04-.22.12-.30.08-.08.19-.12.30-.12h1.16c.56,0,1.09-.22,1.49-.62l.32-.32c.79.78,1.42,1.71,1.85,2.74.43,1.03.65,2.13.65,3.24ZM10.09,0c-1.99,0-3.95.59-5.60,1.70-1.66,1.11-2.95,2.68-3.72,4.53C0,8.07-.20,10.10.19,12.05c.39,1.96,1.35,3.75,2.76,5.16,1.41,1.41,3.21,2.37,5.16,2.76,1.96.39,3.98.19,5.83-.57,1.84-.76,3.42-2.06,4.53-3.72,1.11-1.66,1.70-3.61,1.70-5.60,0-2.67-1.07-5.24-2.96-7.13C15.32,1.07,12.76,0,10.09,0Z"></path>`,
            problem: {
                title: 'Struggling with global device deployment?',
                description: 'Managing IT infrastructure across multiple countries is complex and costly',
                icon: 'https://growrk.com/hubfs/Red_Globe.svg'
            },
            solution: {
                title: 'Our Solution',
                items: [
                    'Procure in 150+ countries with local compliance',
                    'Unified global inventory management',
                    'Consistent service across all remote geographic locations'
                ],
                icon: 'https://growrk.com/hubfs/Ray.svg'
            },
            position: 'middle'
        },
        {
            id: 'lifecycle',
            title: 'Lack of full Lifecycle Management',
            icon: `<path d="M5.69,6.04c-.28-.19-.58-.32-.91-.38-.33-.07-.66-.07-.99,0l-2.21.43c-.11.02-.21.06-.31.12-.09.06-.17.14-.24.23-.06.09-.11.20-.13.31-.02.11-.02.22,0,.33s.06.21.13.31.14.17.24.23c.09.06.20.10.31.12.11.02.22.02.33,0l1.77-.35L.49,12.56C.18,13.06.01,13.64,0,14.23s.13,1.17.42,1.69.70.94,1.21,1.24c.51.30,1.08.46,1.67.46h2.64c.22,0,.44-.09.59-.25.16-.16.25-.37.25-.59s-.09-.44-.25-.59c-.16-.16-.37-.25-.59-.25h-2.64c-.29,0-.57-.08-.82-.22-.25-.15-.45-.36-.59-.61-.14-.25-.22-.54-.21-.84,0-.29.09-.58.25-.83l3.22-5.24.37,2.01c.04.22.17.41.35.54.18.13.41.17.63.13.22-.04.41-.17.54-.35.13-.18.17-.41.13-.63l-.42-2.24c-.06-.33-.19-.64-.37-.92s-.42-.52-.69-.70ZM19.65,12.56l-.81-1.32c-.05-.10-.13-.19-.22-.26s-.19-.12-.30-.15-.23-.04-.34-.02c-.11.02-.22.06-.32.12-.10.06-.18.14-.25.23-.07.09-.11.20-.13.31s-.02.23,0,.34c.02.11.07.22.13.31l.81,1.32c.16.25.24.53.25.83,0,.29-.07.58-.21.84-.14.25-.34.47-.59.61-.25.15-.53.22-.82.22h-6.20l1.07-1.07c.15-.16.24-.37.24-.59,0-.22-.09-.43-.25-.59-.16-.16-.37-.24-.59-.25-.22,0-.43.08-.59.23l-1.42,1.41c-.44.44-.70,1.04-.71,1.66h0v.03c0,.32.06.64.18.94.12.30.31.57.53.80l1.41,1.39c.08.08.17.15.27.19s.21.07.33.07c.11,0,.22-.02.33-.06s.20-.11.28-.19c.08-.08.14-.18.18-.28.04-.10.06-.22.06-.33,0-.11-.03-.22-.07-.33-.05-.10-.11-.19-.20-.27l-1.12-1.10h6.26c.59,0,1.17-.16,1.67-.46.51-.30.93-.73,1.21-1.24.29-.51.43-1.10.42-1.69s-.18-1.16-.49-1.67ZM8.69,2.44l-1.19,1.93c-.12.18-.31.30-.52.34-.21.04-.43,0-.61-.11-.18-.11-.32-.29-.37-.50-.06-.21-.03-.43.07-.62l1.19-1.93c.30-.48.71-.87,1.20-1.14s1.04-.41,1.61-.41,1.11.14,1.61.41c.49.27.91.66,1.20,1.14l3.53,5.74.37-1.99c.04-.22.17-.41.35-.54s.41-.17.63-.13c.22.04.41.17.54.35.13.18.17.41.13.63l-.42,2.24c-.11.58-.41,1.10-.86,1.47-.45.38-1.02.58-1.61.58-.16,0-2.70-.48-2.70-.48-.21-.05-.40-.18-.52-.36s-.16-.41-.12-.62.17-.41.35-.53.40-.17.62-.13l1.79.35-3.50-5.70c-.15-.23-.35-.43-.59-.56s-.51-.20-.79-.20-.55.07-.79.20c-.24.13-.44.33-.59.56Z"></path>`,
            problem: {
                title: 'Lack of full lifecycle management?',
                description: 'Fragmented processes for device procurement, deployment and disposal',
                icon: 'https://growrk.com/hubfs/Red_Recycle.svg'
            },
            solution: {
                title: 'Our Solution',
                items: [
                    'Complete device lifecycle from procurement to recycling',
                    'Store, reuse, and recycle your inventory efficiently',
                    'Streamline your existing workflows with integrated solutions'
                ],
                icon: 'https://growrk.com/hubfs/Ray.svg'
            },
            position: 'middle'
        },
        {
            id: 'security',
            title: 'Security & compliance concerns',
            icon: `<path d="M14.02,1.81L8.72.04c-.17-.06-.36-.06-.53,0L2.89,1.81C1.16,2.38,0,4,0,5.82v4.33C0,16.54,7.78,20.07,8.11,20.22c.22.10.47.10.69,0,.33-.15,8.11-3.68,8.11-10.07v-4.33c0-1.82-1.16-3.44-2.89-4.01ZM15.22,10.14c0,4.61-5.34,7.64-6.76,8.36-1.42-.72-6.76-3.74-6.76-8.36v-4.33c0-1.09.70-2.06,1.73-2.41l5.03-1.68,5.03,1.68c1.04.35,1.73,1.31,1.73,2.41v4.33Z"></path>`,
            problem: {
                title: 'Security and compliance concerns?',
                description: 'Ensuring data security and regulatory compliance across global operations',
                icon: 'https://growrk.com/hubfs/Red_Shield.svg'
            },
            solution: {
                title: 'Our Solution',
                items: [
                    'SOC 2 Type 2 certified security standards',
                    'Enterprise‑grade data protection',
                    'Automated compliance reporting and monitoring'
                ],
                icon: 'https://growrk.com/hubfs/Ray.svg'
            },
            position: 'right'
        }
    ];

    const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[3];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Tabs List */}
                <div className="flex lg:flex-row sm:flex-col justify-center gap-0 mb-12 bg-white p-1 rounded-lg">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`group flex flex-col text-center items-center px-6 py-4 rounded-lg border transition-all duration-300 ${activeTab === tab.id
                                ? 'bg-yellow-500 text-white'
                                : 'border-white text-gray-700 hover:bg-yellow-500 hover:text-white cursor-pointer'
                                }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 20 21"
                                className={`mr-3 flex-shrink-0 ${activeTab === tab.id
                                    ? 'fill-white'
                                    : 'fill-gray-700 group-hover:fill-white'
                                    }`}
                                dangerouslySetInnerHTML={{ __html: tab.icon }}
                            />
                            <span className="text-left font-medium">{tab.title}</span>
                        </div>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                        {/* Problem Card */}
                        <div className="p-8">
                            <div className="flex items-start mb-4">
                                <div className="bg-red-100 p-3 rounded-lg mr-4">
                                    <img
                                        src={activeTabData.problem.icon}
                                        alt="Problem icon"
                                        width={32}
                                        height={32}
                                        className="text-red-600"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 py-3">
                                    {activeTabData.problem.title}
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                {activeTabData.problem.description}
                            </p>
                        </div>

                        {/* Solution Card */}
                        <div className="p-8">
                            <div className="flex items-start mb-6">
                                <div className="bg-green-100 p-3 rounded-lg mr-4">
                                    <img
                                        src={activeTabData.solution.icon}
                                        alt="Solution icon"
                                        width={32}
                                        height={32}
                                        className="text-blue-600 "
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 py-3">
                                    {activeTabData.solution.title}
                                </h3>
                            </div>
                            <div className="space-y-2">
                                {activeTabData.solution.items.map((item, index) => (
                                    <div key={index} className="flex items-start bg-green-100 p-4 rounded-xl">
                                        <svg
                                            className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChallengesSection;