import React, { useState, useEffect } from 'react';

interface Country {
    code: string;
    name: string;
    currency: string;
    currencySymbol: string;
    image: string;
}

const GlobalReachSection: React.FC = () => {
    const [selectedCountry, setSelectedCountry] = useState(0);

    const countries: Country[] = [
        { code: 'CA', name: 'Canada', currency: 'CAD', currencySymbol: 'CAD', image: 'https://growrk.com/hubfs/1203_01-min.png' },
        { code: 'FR', name: 'France', currency: 'EUR', currencySymbol: '€', image: 'https://growrk.com/hubfs/1203_01-min.png' },
        { code: 'DE', name: 'Germany', currency: 'EUR', currencySymbol: '€', image: 'https://growrk.com/hubfs/1203_01-min.png' },
        { code: 'IT', name: 'Italy', currency: 'EUR', currencySymbol: '€', image: 'https://growrk.com/hubfs/1203_01-min.png' },
        { code: 'JP', name: 'Japan', currency: 'JPY', currencySymbol: '¥', image: 'https://growrk.com/hubfs/1203_01-min.png' },
        { code: 'US', name: 'United States', currency: 'USD', currencySymbol: '$', image: 'https://growrk.com/hubfs/1203_01-min.png' },
        { code: 'MX', name: 'Mexico', currency: 'MXN', currencySymbol: '$', image: 'https://growrk.com/hubfs/1203_01-min.png' },
        { code: 'BR', name: 'Brazil', currency: 'BRL', currencySymbol: 'R$', image: 'https://growrk.com/hubfs/1204_09-min.png' },
        { code: 'ES', name: 'Spain', currency: 'EUR', currencySymbol: '€', image: 'https://growrk.com/hubfs/1203_01-min.png' },
        { code: 'GB', name: 'United Kingdom', currency: 'GBP', currencySymbol: '£', image: 'https://growrk.com/hubfs/1203_01-min.png' },
        { code: 'NL', name: 'Netherlands', currency: 'EUR', currencySymbol: '€', image: 'https://growrk.com/hubfs/1203_01-min.png' },
        { code: 'AU', name: 'Australia', currency: 'AUD', currencySymbol: 'A$', image: 'https://growrk.com/hubfs/1203_01-min.png' },
        { code: 'SG', name: 'Singapore', currency: 'SGD', currencySymbol: 'S$', image: 'https://growrk.com/hubfs/1203_01-min.png' },
        { code: 'SE', name: 'Sweden', currency: 'SEK', currencySymbol: 'kr', image: 'https://growrk.com/hubfs/1203_01-min.png' },
    ];

    // Auto-rotate countries
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setSelectedCountry((prev) => (prev + 1) % countries.length);
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, [countries.length]);

    return (
        <section className="py-16 px-5 bg-gradient-to-b from-gray-700 to-gray-800 text-white">
            <div className="mx-auto max-w-[1300px]">
                {/* Header Section */}
                <div className="text-left mb-12">
                    <div className="mb-4">
                        <p className="text-yellow-400 font-light text-md">
                            GLOBAL REACH
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl md:text-5xl font-medium">
                            <span className="">Procure</span>
                            <span className=""> in</span>
                            <span className="text-yellow-400"> 150+ countries</span>
                        </h2>
                    </div>

                    <div className="">
                        <div className="border-l-4 border-gray-500 pl-4">
                            <p className="text-lg">
                                With access to certified resellers we make topping up and storing your inventory around the world simple and cost-effective. Employees get their devices and peripherals within 7 business days with the option for expedited shipping in select countries.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Interactive Flags & Card Section */}
                <div className="flex h-130 gap-8 items-center border bg-gray-800 border-gray-500 rounded-xl shadow p-10 bg-[url('https://growrk.com/hubfs/1202_Procurement%20BG-min.png')] bg-cover bg-right">
                    {/* Flags Rail */}
                    <div className="basis-1/12 flex h-110 items-center overflow-auto scrollbar-hidden">
                        <div
                            className="overflow-hidden w-full"
                            role="group"
                            aria-label="Countries"
                        >
                            <div className="lg:flex-col gap-2 lg:gap-4">
                                {countries.map((country, index) => (
                                    <button
                                        key={country.code}
                                        type="button"
                                        className={`flex justify-center w-full my-4 items-center p-4 rounded-sm ${index === selectedCountry
                                            ? 'bg-gray-400 cursor-pointer'
                                            : 'bg-gray-600 cursor-pointer'
                                            }`}
                                        onClick={() => setSelectedCountry(index)}
                                        aria-label={country.name}
                                        aria-current={index === selectedCountry ? 'true' : 'false'}
                                    >
                                        <img
                                            src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                            alt={`${country.code} flag`}
                                            className="w-8 h-6 object-cover rounded"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Central Card */}
                    <div className="basis-1/2">
                        <div className="rounded-xl overflow-hidden text-gray-900">
                            <div
                                className="h-100 bg-cover bg-center relative"
                                style={{ backgroundImage: `url(${countries[selectedCountry].image})` }}
                            >
                                <div className="absolute top-4 left-4 bg-gray-100 rounded-sm py-1 px-3 shadow-md flex items-center">
                                    <img
                                        src={`https://flagcdn.com/w40/${countries[selectedCountry].code.toLowerCase()}.png`}
                                        alt={`${countries[selectedCountry].code} flag`}
                                        className="w-6 h-4 object-cover rounded mr-2"
                                    />
                                    <span className="text-sm font-semibold">
                                        Order for {countries[selectedCountry].currency}
                                    </span>
                                </div>
                            </div>
                            {/* <div className="p-6"> */}
                            {/* <h3 className="text-xl font-bold mb-2">{countries[selectedCountry].name}</h3>
                                <p className="text-gray-600">Devices delivered in 7 business days</p>
                                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                                    Check Availability
                                </button> */}
                            {/* </div> */}
                        </div>
                    </div>

                    {/* World Map Visualization */}
                    <div className="basis-1/3 hidden lg:block">
                        <img src='https://growrk.com/hubfs/1201_Procurement%20Aside-min.png' />
                    </div>
                </div>


            </div>
        </section>
    );
};

export default GlobalReachSection;