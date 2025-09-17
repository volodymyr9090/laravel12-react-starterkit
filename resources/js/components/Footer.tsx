import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="w-full bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* SOLUTIONS Column */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 text-yellow-400">SOLUTIONS</h4>
                        <ul className="space-y-2">
                            <li><a href="https://growrk.com/product/it-asset-management/?hsLang=en" className="text-gray-300 hover:text-white transition-colors">IT Asset Management</a></li>
                            <li><a href="https://growrk.com/product/it-onboarding/?hsLang=en" className="text-gray-300 hover:text-white transition-colors">IT Onboarding + Procurement</a></li>
                            <li><a href="https://growrk.com/product/device-management/?hsLang=en" className="text-gray-300 hover:text-white transition-colors">Device management</a></li>
                            <li><a href="https://growrk.com/product/it-support/?hsLang=en" className="text-gray-300 hover:text-white transition-colors">AI-powered IT support</a></li>
                            <li><a href="https://growrk.com/product/equipment-retrieval/?hsLang=en" className="text-gray-300 hover:text-white transition-colors">Equipment Retrieval</a></li>
                            <li><a href="https://growrk.com/product/integrations/?hsLang=en" className="text-gray-300 hover:text-white transition-colors">Integrations</a></li>
                        </ul>
                    </div>

                    {/* RESOURCES Column */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 text-yellow-400">RESOURCES</h4>
                        <ul className="space-y-2">
                            <li><a href="https://growrk.com/blog?hsLang=en" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="https://growrk.com/case-studies/?hsLang=en" className="text-gray-300 hover:text-white transition-colors">Case studies</a></li>
                            <li><a href="https://growrk.com/guides?hsLang=en" className="text-gray-300 hover:text-white transition-colors">Guides</a></li>
                            <li><a href="https://growrk.com/partners?hsLang=en" className="text-gray-300 hover:text-white transition-colors">Partners</a></li>
                            <li><a href="https://growrk.com/newsletter?hsLang=en" className="text-gray-300 hover:text-white transition-colors">Newsletter</a></li>
                        </ul>
                    </div>

                    {/* GROWRK Column */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 text-yellow-400">GROWRK</h4>
                        <ul className="space-y-2">
                            <li><a href="https://growrk.com/about-us?hsLang=en" className="text-gray-300 hover:text-white transition-colors">About us</a></li>
                            <li><a href="https://growrk.com/security?hsLang=en" className="text-gray-300 hover:text-white transition-colors">Security</a></li>
                            <li><a href="https://growrk.com/careers?hsLang=en" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                            <li><a href="https://growrk.com/faqs?hsLang=en" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    {/* FOLLOW US Column */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 text-yellow-400">FOLLOW US</h4>
                        <div className="flex space-x-4 mb-6">
                            <a href="https://twitter.com/growrkremote/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/growrk/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/@GrowGlobalWithGroWrk" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                                    <path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z" />
                                </svg>
                            </a>
                            <a href="https://open.spotify.com/show/2CBAQit2CUufmT1FAUCLit" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 496 512">
                                    <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" />
                                </svg>
                            </a>
                        </div>

                        {/* Badges */}
                        <div className="flex space-x-4">
                            <a href="https://www.g2.com/products/growrk/reviews#reviews" target="_blank" rel="noopener noreferrer">
                                <img src="https://growrk.com/hubfs/552_G2%20(1)-2.png" alt="G2 Badge" className="h-8 w-auto" />
                            </a>
                            <a href="https://www.trustpilot.com/review/growrk.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://growrk.com/hubfs/625_Trustpilot.png" alt="Trustpilot Badge" className="h-8 w-auto" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8">
                    <div className="flex flex-col md:flex-col justify-between items-left space-y-4">
                        <a href="//growrk.com?hsLang=en">
                            <img
                                src="https://growrk.com/hs-fs/hubfs/GroWrk-Logo-DarkBG.png?width=160&height=46&name=GroWrk-Logo-DarkBG.png"
                                alt="GroWrk Logo"
                                className="h-10 w-auto mb-4 md:mb-0"
                            />
                        </a>

                        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                            <li>
                                <a href="https://growrk.com/terms-and-conditions/?hsLang=en" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="https://growrk.com/privacy-policy/?hsLang=en" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="https://growrk.com/cookie-policy?hsLang=en" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;