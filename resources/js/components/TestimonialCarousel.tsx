import React, { useEffect, useRef, useState } from 'react';

interface Testimonial {
    id: number;
    type: 'rating' | 'avatar';
    rating?: number;
    source: string;
    sourceLogo: string;
    quote: string;
    author?: string;
    role?: string;
    company?: string;
    avatar?: string;
}

const TestimonialCarousel: React.FC = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const animationRef = useRef<number | null>(null);
    const positionRef = useRef(0);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            type: 'rating',
            rating: 5,
            source: 'Trustpilot',
            sourceLogo: 'https://growrk.com/hubfs/1200_Trustpilot%20star.png',
            quote: 'They helped us picking up and restoring laptops abroad.',
            author: 'Sebastian Cruz (CO)'
        },
        {
            id: 2,
            type: 'rating',
            rating: 5,
            source: 'G2',
            sourceLogo: 'https://growrk.com/hubfs/G2.png',
            quote: 'GroWrk is willing to make changes to be better.',
            author: 'Billy G.',
            role: 'Corporate IT Engineer'
        },
        {
            id: 3,
            type: 'rating',
            rating: 5,
            source: 'Trustpilot',
            sourceLogo: 'https://growrk.com/hubfs/1200_Trustpilot%20star.png',
            quote: 'Platform gets easier; they provide remote workers everything they need anywhere in the world. Great communication and quicker device deliveries. We’re so happy to partner with GroWrk!',
            author: 'Sebastian Cruz (CO)'
        },
        {
            id: 5,
            type: 'rating',
            rating: 5,
            source: 'Trustpilot',
            sourceLogo: 'https://growrk.com/hubfs/1200_Trustpilot%20star.png',
            quote: 'Detailed product history and chain of custody; support is always there. Shoutout to Paul M.',
            author: 'Kenny Gousby (US)'
        },
        {
            id: 6,
            type: 'avatar',
            source: 'Upwork',
            sourceLogo: 'https://growrk.com/hubfs/Upwork-1.png',
            quote: 'Before GroWrk, we spent hours coordinating device returns, and we were still missing SLAs.',
            author: 'Shauna MacMillan',
            role: 'IT Specialist, Upwork',
            avatar: 'https://growrk.com/hubfs/Shauna%20MacMillan.jpeg'
        },
        {
            id: 4,
            type: 'avatar',
            source: 'OfferUp',
            sourceLogo: 'https://growrk.com/hubfs/OfferUp_Logo.png',
            quote: 'We can monitor our inventory and assign or pull back equipment as needed. It\'s been a huge time saver and a big stress reduction.',
            author: 'Michael Goldblatt',
            role: 'IT and Internal Tools Manager',
            avatar: 'https://growrk.com/hubfs/Michael%20Goldblatt.jpeg'
        },
        {
            id: 7,
            type: 'avatar',
            source: 'Upwork',
            sourceLogo: 'https://growrk.com/hubfs/Upwork-1.png',
            quote: 'Platform gets easier; they provide remote workers everything they need anywhere in the world. Great communication and quicker device deliveries. We’re so happy to partner with GroWrk!',
            author: 'Shauna MacMillan',
            role: 'IT Specialist, Upwork',
            avatar: 'https://growrk.com/hubfs/Shauna%20MacMillan.jpeg'
        },
        // Add more testimonials as needed
    ];

    // Duplicate testimonials for seamless infinite scroll
    const allTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];

    // Helper to chunk array into pairs
    function chunkArray<T>(arr: T[], size: number): T[][] {
        const result: T[][] = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    }

    const testimonialPairs = chunkArray(allTestimonials, 2);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const speed = 1;
        const itemWidth = 384; // w-96 = 384px
        const gap = 24; // Tailwind's space-x-6 = 1.5rem = 24px
        const colWidth = itemWidth + gap;
        const totalCols = Math.ceil(allTestimonials.length / 2); // 2 testimonials per col
        const totalWidth = totalCols * colWidth;

        const animate = () => {
            if (!isPaused) {
                positionRef.current -= speed;

                // Use modulus for seamless infinite scroll
                if (Math.abs(positionRef.current) >= totalWidth / 2) {
                    positionRef.current = positionRef.current % (totalWidth / 2);
                }

                if (track) {
                    track.style.transform = `translateX(${positionRef.current}px)`;
                }
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        const handleMouseEnter = () => setIsPaused(true);
        const handleMouseLeave = () => setIsPaused(false);

        track.addEventListener('mouseenter', handleMouseEnter);
        track.addEventListener('mouseleave', handleMouseLeave);

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            track.removeEventListener('mouseenter', handleMouseEnter);
            track.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [allTestimonials.length, isPaused]);

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <svg
                key={i}
                viewBox="0 0 24 24"
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            >
                <path d="M12 17.77l-6.18 3.73l1.64-7.03L2 9.5l7.19-.61L12 2.5l2.81 6.39L22 9.5l-5.46 4.97l1.64 7.03z" />
            </svg>
        ));
    };

    return (
        <section className="py-16 pt-10 bg-gray-100">
            <div className="mx-auto px-4 sm:px-0 lg:px-0">
                <h2 className="text-5xl text-gray-700 font-semibold text-center mb-12">
                    What our customers say
                </h2>

                <div className="relative overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex items-center space-x-6 transition-transform duration-1000 ease-linear"
                    >
                        {testimonialPairs.map((pair, colIdx) => (
                            <div key={colIdx} className="flex flex-col space-y-6 flex-shrink-0 w-80 items-center">
                                {pair.map((testimonial, index) => (
                                    <div
                                        key={`${testimonial.id}-${index}`}
                                        className="bg-white rounded-xl shadow-lg p-6 w-full"
                                    >
                                        {testimonial.type === 'rating' && testimonial.rating && (
                                            <>
                                                <div className="flex mb-4">
                                                    {renderStars(testimonial.rating)}
                                                </div>
                                                <div className="flex items-center mb-4">
                                                    <img
                                                        src={testimonial.sourceLogo}
                                                        alt={testimonial.source}
                                                        className="h-6 w-auto mr-2"
                                                    />
                                                    <span className="font-semibold text-gray-700">
                                                        {testimonial.source}
                                                    </span>
                                                </div>
                                                <blockquote className="text-gray-600 mb-4">
                                                    {testimonial.quote}
                                                </blockquote>
                                                {testimonial.author && (
                                                    <div className="text-md font-bold text-gray-700">
                                                        {testimonial.author}
                                                        {testimonial.role && ` · ${testimonial.role}`}
                                                    </div>
                                                )}
                                            </>
                                        )}

                                        {testimonial.type === 'avatar' && (
                                            <>
                                                <div className="flex items-start mb-4">
                                                    <img
                                                        src={testimonial.avatar}
                                                        alt={testimonial.author}
                                                        className="w-12 h-12 rounded-full mr-4 flex-shrink-0"
                                                    />
                                                    <div>
                                                        <p className="text-gray-600 text-md">{testimonial.quote}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between mt-4">
                                                    <div className="flex items-center">
                                                        <img
                                                            src={testimonial.sourceLogo}
                                                            alt={testimonial.source}
                                                            className="w-25 mr-2"
                                                        />
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="font-semibold text-gray-800">{testimonial.author}</div>
                                                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Gradient fade effects */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent" />
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;