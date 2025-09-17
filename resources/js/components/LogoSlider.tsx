import React, { useEffect, useRef, useState } from 'react';

interface Logo {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const LogoSlider: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [logos, setLogos] = useState<Logo[]>([]);
    const animationFrameId = useRef<number | null>(null);
    const isPaused = useRef(false);
    const position = useRef(0);

    useEffect(() => {
        // Initialize logos data
        const initialLogos: Logo[] = [
            {
                src: "https://growrk.com/hs-fs/hubfs/Brex.png?width=316&height=168&name=Brex.png",
                alt: "Brex",
                width: 316,
                height: 168
            },
            {
                src: "https://growrk.com/hs-fs/hubfs/Ripple.png?width=316&height=168&name=Ripple.png",
                alt: "Ripple",
                width: 316,
                height: 168
            },
            {
                src: "https://growrk.com/hs-fs/hubfs/OfferUp-3.png?width=261&height=168&name=OfferUp-3.png",
                alt: "OfferUp",
                width: 261,
                height: 168
            },
            {
                src: "https://growrk.com/hs-fs/hubfs/Upwork.png?width=316&height=168&name=Upwork.png",
                alt: "Upwork",
                width: 316,
                height: 168
            },
            {
                src: "https://growrk.com/hs-fs/hubfs/Toptal.png?width=269&height=168&name=Toptal.png",
                alt: "Toptal",
                width: 269,
                height: 168
            },
            {
                src: "https://growrk.com/hs-fs/hubfs/Skillsoft.png?width=316&height=168&name=Skillsoft.png",
                alt: "Skillsoft",
                width: 316,
                height: 168
            },
            {
                src: "https://growrk.com/hs-fs/hubfs/chub_backup/Commvault_logo_2019.svg.png?width=316&height=168&name=Commvault_logo_2019.svg.png",
                alt: "Commvault",
                width: 316,
                height: 168
            },
            {
                src: "https://growrk.com/hs-fs/hubfs/elastic.png?width=316&height=168&name=elastic.png",
                alt: "Elastic",
                width: 316,
                height: 168
            },
            {
                src: "https://growrk.com/hs-fs/hubfs/instacart.png?width=316&height=168&name=instacart.png",
                alt: "Instacart",
                width: 316,
                height: 168
            },
            {
                src: "https://growrk.com/hs-fs/hubfs/Encora.png?width=316&height=168&name=Encora.png",
                alt: "Encora",
                width: 316,
                height: 168
            },
            {
                src: "https://growrk.com/hs-fs/hubfs/Podium.png?width=320&height=168&name=Podium.png",
                alt: "Podium",
                width: 320,
                height: 168
            },
            {
                src: "https://growrk.com/hs-fs/hubfs/Henry-Schein-One.png?width=316&height=168&name=Henry-Schein-One.png",
                alt: "Henry Schein",
                width: 316,
                height: 168
            },
            {
                src: "https://growrk.com/hs-fs/hubfs/Acronis.png?width=316&height=168&name=Acronis.png",
                alt: "Acronis",
                width: 316,
                height: 168
            },
            {
                src: "https://growrk.com/hs-fs/hubfs/VaynerMedia.png?width=316&height=168&name=VaynerMedia.png",
                alt: "VaynerMedia",
                width: 316,
                height: 168
            },
            {
                src: "https://growrk.com/hs-fs/hubfs/Website/hopper.png?width=300&height=168&name=hopper.png",
                alt: "Hopper",
                width: 300,
                height: 168
            }
        ];

        setLogos(initialLogos);
    }, []);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider || logos.length === 0) return;

        const speed = 1;

        const animate = () => {
            if (!isPaused.current) {
                position.current -= speed;
                if (position.current <= -slider.scrollWidth / 2) {
                    position.current = 0;
                }
                slider.style.transform = `translateX(${position.current}px)`;
            }
            animationFrameId.current = requestAnimationFrame(animate);
        };

        const handleMouseEnter = () => {
            isPaused.current = true;
        };

        const handleMouseLeave = () => {
            isPaused.current = false;
        };

        slider.addEventListener('mouseenter', handleMouseEnter);
        slider.addEventListener('mouseleave', handleMouseLeave);

        animationFrameId.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            slider.removeEventListener('mouseenter', handleMouseEnter);
            slider.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [logos]);

    // Duplicate logos for seamless infinite scroll
    const allLogos = [...logos, ...logos];

    return (
        <div className="py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div
                        ref={sliderRef}
                        className="flex space-x-8 transition-transform duration-500 ease-linear"
                    >
                        {allLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex items-center justify-center"
                                style={{ width: `${logo.width / 30}rem`, height: `${logo.height / 30}rem` }}
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={logo.width}
                                    height={logo.height}
                                    className="object-contain max-h-20 filter grayscale hover:grayscale-0 transition-all duration-300 opacity-90 hover:opacity-100"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Gradient fade effects on sides */}
                    {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent"></div> */}
                    {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent"></div> */}
                </div>
            </div>
        </div>
    );
};

export default LogoSlider;