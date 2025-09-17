import React, { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Logo Section */}
                    <div className="flex justify-center">
                        <a href="" className="block">
                            <img
                                src="https://growrk.com/hs-fs/hubfs/GroWrk-Logo-Regular-1.png?width=85&height=24&name=GroWrk-Logo-Regular-1.png"
                                className="h-6 w-auto"
                                alt="GroWrk Logo"
                                width="85"
                                height="24"
                            />
                        </a>
                    </div>

                    {/* Navigation Menu */}
                    <div className="mx-7">
                        <nav className="relative hidden lg:block">
                            <ul className="flex space-x-8">
                                {/* Solutions Dropdown */}
                                <li className="relative group">
                                    <button
                                        className="flex items-center text-gray-700 hover:text-blue-600 font-medium pt-2 pb-0"
                                    >
                                        Solutions
                                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className="absolute left-0 mt-2 w-[700px] bg-white shadow-xl rounded-md p-6 z-20 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:block transition-opacity duration-300">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <a href="https://growrk.com/product?hsLang=en" className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded">
                                                    <img src="https://growrk.com/hubfs/1021_Mega%20Menu_Product%20features.svg" alt="Platform Features" className="w-12 h-12 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">Platform Features</p>
                                                        <p className="text-sm text-gray-600 mt-1">A full breakdown of our IT lifecycle management services</p>
                                                    </div>
                                                </a>

                                                <a href="https://growrk.com/a-la-carte?hsLang=en" className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded">
                                                    <img src="https://growrk.com/hubfs/1021_Mega%20Menu_A%20La%20Carte.svg" alt="A La Carte" className="w-12 h-12 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">A La Carte</p>
                                                        <p className="text-sm text-gray-600 mt-1">The first pay-as-you-go IT asset management platform</p>
                                                    </div>
                                                </a>

                                                <a href="https://growrk.com/product-tour?hsLang=en" className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded">
                                                    <img src="https://growrk.com/hubfs/1021_Mega%20Menu_Partnerships%20copia%202.svg" alt="Product Tour" className="w-12 h-12 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">Product Tour</p>
                                                        <p className="text-sm text-gray-600 mt-1">Test drive our dashboard</p>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="space-y-4">
                                                <a href="https://growrk.com/it-asset-management-small-business?hsLang=en" className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded">
                                                    <img src="https://growrk.com/hubfs/1021_Mega%20Menu_Startup.svg" alt="For Startups" className="w-12 h-12 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">For Startups</p>
                                                        <p className="text-sm text-gray-600 mt-1">Growing remote companies (0-100 employees)</p>
                                                    </div>
                                                </a>

                                                <a href="https://growrk.com/it-asset-management-for-mid-sized-businesses?hsLang=en" className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded">
                                                    <img src="https://growrk.com/hubfs/1021_Mega%20Menu_Enterprise.svg" alt="For Mid-Market" className="w-12 h-12 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">For Mid-Market</p>
                                                        <p className="text-sm text-gray-600 mt-1">Scaling companies (100-500 employees)</p>
                                                    </div>
                                                </a>

                                                <a href="https://growrk.com/enterprise-it-asset-management?hsLang=en" className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded">
                                                    <img src="https://growrk.com/hubfs/1021_Mega%20Menu_Mid-Market.svg" alt="For Enterprise" className="w-12 h-12 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">For Enterprise</p>
                                                        <p className="text-sm text-gray-600 mt-1">Companies with a global footprint (500-1000+ employees)</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* Resources Dropdown */}
                                <li className="relative group">
                                    <button
                                        className="flex items-center text-gray-700 hover:text-blue-600 font-medium pt-2 pb-0"
                                    >
                                        Resources
                                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <div className="absolute left-0 mt-2 w-[700px] bg-white shadow-xl rounded-md p-6 z-20 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:block transition-opacity duration-300">
                                        <div className="grid grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <p className="font-semibold text-gray-800">Learn</p>

                                                <a href="https://growrk.com/blog?hsLang=en" className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded">
                                                    <img src="https://growrk.com/hubfs/1021_Mega%20Menu_Blogs.svg" alt="Blog" className="w-12 h-12 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">Blog</p>
                                                        <p className="text-sm text-gray-600 mt-1">Read the latest on remote work, advice, news, and more</p>
                                                    </div>
                                                </a>

                                                <a href="https://growrk.com/guides?hsLang=en" className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded">
                                                    <img src="https://growrk.com/hubfs/1021_Mega%20Menu_Product%20Guides.svg" alt="Product Guides" className="w-12 h-12 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">Product Guides</p>
                                                        <p className="text-sm text-gray-600 mt-1">Stay updated and learn about the GroWrk platform</p>
                                                    </div>
                                                </a>

                                                <a href="https://growrk.com/case-studies/?hsLang=en" className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded">
                                                    <img src="https://growrk.com/hubfs/1021_Mega%20Menu_Case%20Studies.svg" alt="Case Studies" className="w-12 h-12 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">Case Studies</p>
                                                        <p className="text-sm text-gray-600 mt-1">How we have helped our clients achieve success</p>
                                                    </div>
                                                </a>

                                                <a href="https://growrk.com/ebooks?hsLang=en" className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded">
                                                    <img src="https://growrk.com/hubfs/1021_Mega%20Menu_eBooks%20and%20Webinars.svg" alt="eBooks and Webinars" className="w-12 h-12 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">eBooks and Webinars</p>
                                                        <p className="text-sm text-gray-600 mt-1">Research and insights into the IT asset industry</p>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="space-y-4">
                                                <p className="font-semibold text-gray-800">Connect</p>

                                                <a href="https://growrk.com/country-guide?hsLang=en" className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded">
                                                    <img src="https://growrk.com/hubfs/1021_Mega%20Menu_Country%20Guide-1.svg" alt="Country Guide" className="w-12 h-12 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">GroWrk's IT Equipment Country Guide</p>
                                                        <p className="text-sm text-gray-600 mt-1">Learn how to procure, ship, and retrieve devices across LATAM, EMEA, APAC, and North America</p>
                                                    </div>
                                                </a>

                                                <a href="https://growrk.com/cio-corner?hsLang=en" className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded">
                                                    <img src="https://growrk.com/hubfs/1021_Mega%20Menu_CIO%20Corner-1.svg" alt="CIO Corner" className="w-12 h-12 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">GroWrk's CIO Corner</p>
                                                        <p className="text-sm text-gray-600 mt-1">Your gateway to actionable strategies, industry-leading perspectives, and global IT asset management solutions</p>
                                                    </div>
                                                </a>

                                                <a href="https://growrk.com/roi-calculator?hsLang=en" className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded">
                                                    <img src="https://growrk.com/hubfs/1021_Mega%20Menu_ROI%20Calculator.svg" alt="ROI Calculator" className="w-12 h-12 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-semibold">ROI Calculator</p>
                                                        <p className="text-sm text-gray-600 mt-1">Wonder how much you could save? Try our 2-min ROI calculator.</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* Simple Links */}
                                <li>
                                    <a href="https://growrk.com/pricing?hsLang=en" className="text-gray-700 hover:text-blue-600 font-medium py-2 block">
                                        Pricing
                                    </a>
                                </li>

                                <li>
                                    <a href="https://growrk.com/why-growrk?hsLang=en" className="text-gray-700 hover:text-blue-600 font-medium py-2 block">
                                        Why GroWrk
                                    </a>
                                </li>

                                {/* Company Dropdown */}
                                <li className="relative group">
                                    <button
                                        className="flex items-center text-gray-700 hover:text-blue-600 font-medium pt-2 pb-0"
                                    >
                                        Company
                                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <div className="absolute left-0 mt-2 w-[700px] bg-white shadow-xl rounded-md p-6 z-20 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:block transition-opacity duration-300">
                                        <div className="space-y-4">
                                            <a href="https://growrk.com/about-us?hsLang=en" className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded">
                                                <img src="https://growrk.com/hubfs/1021_Mega%20Menu_About%20Us.svg" alt="About Us" className="w-12 h-12 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold">About Us</p>
                                                    <p className="text-sm text-gray-600 mt-1">What we stand for. Our mission, story, and team.</p>
                                                </div>
                                            </a>

                                            <a href="https://growrk.com/security?hsLang=en" className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded">
                                                <img src="https://growrk.com/hubfs/1021_Mega%20Menu_Security.svg" alt="Security" className="w-12 h-12 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold">Security</p>
                                                    <p className="text-sm text-gray-600 mt-1">Zoom into our security processes, policies, and certifications.</p>
                                                </div>
                                            </a>

                                            <a href="https://growrk.com/careers?hsLang=en" className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded">
                                                <img src="https://growrk.com/hubfs/1021_Mega%20Menu_Careers.svg" alt="Careers" className="w-12 h-12 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold">Careers</p>
                                                    <p className="text-sm text-gray-600 mt-1">Join our vibrant team of remote GroWrkers working from all over the world.</p>
                                                </div>
                                            </a>

                                            <a href="https://growrk.com/partners?hsLang=en" className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded">
                                                <img src="https://growrk.com/hubfs/1021_Mega%20Menu_Partnerships.svg" alt="Partnerships" className="w-12 h-12 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold">Partnerships</p>
                                                    <p className="text-sm text-gray-600 mt-1">Learn more about partnering with us</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <a href="https://growrk.com/faqs?hsLang=en" className="text-gray-700 hover:text-blue-600 font-medium py-2 block">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* SOC2 Badge */}
                    <div className="w-1/12 flex justify-center ">
                        <a href="https://growrk.com/security?hsLang=en" className="hidden lg:block">
                            <img
                                src="https://growrk.com/hs-fs/hubfs/582_SOC2-Badge-min-1.png?width=100&height=50&name=582_SOC2-Badge-min-1.png"
                                className="h-12 w-auto"
                                alt="SOC2 Badge"
                                width="100"
                                height="50"
                            />
                        </a>
                    </div>

                    {/* Login Button */}
                    <div className="w-1/12 flex justify-center">
                        <a
                            href="https://app.growrk.com/sso/login/"
                            target="_blank"
                            className="text-yellow-400 hover:text-yellow-500 font-medium hidden lg:block"
                        >
                            Login
                        </a>
                    </div>

                    {/* CTA Button */}
                    <div className="w-2/12 flex justify-center">
                        <a
                            href="#"
                            className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-1 px-6 rounded-4xl transition-colors hidden lg:block"
                        >
                            Request a demo
                        </a>
                    </div>
                    <div className="block lg:hidden md:block">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            <img src="menu.png" className='w-8 h-8'></img>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu Drawer */}
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex transition-opacity duration-300 ease-in-out opacity-100">
                    <div className="bg-white w-64 h-full shadow-lg p-6 relative transform transition-transform duration-300 ease-in-out translate-x-0">
                        <button
                            className="absolute top-4 right-4 text-gray-700 text-2xl"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            ×
                        </button>
                        <nav>
                            <ul className="space-y-4 mt-10">
                                <li><a href="https://growrk.com/product?hsLang=en">Solutions</a></li>
                                <li><a href="https://growrk.com/blog?hsLang=en">Resources</a></li>
                                <li><a href="https://growrk.com/pricing?hsLang=en">Pricing</a></li>
                                <li><a href="https://growrk.com/why-growrk?hsLang=en">Why GroWrk</a></li>
                                <li><a href="https://growrk.com/about-us?hsLang=en">Company</a></li>
                                <li><a href="https://growrk.com/faqs?hsLang=en">FAQ</a></li>
                                <li>
                                    <a
                                        href="#"
                                        className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-2 px-4 rounded-4xl transition-colors block text-center"
                                    >
                                        Login
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex-1" onClick={() => setMenuOpen(false)} />
                </div>
            )}
        </header >
    );
};

export default Header;