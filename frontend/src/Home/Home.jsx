import React from 'react';
import { CheckCircle, Lock, Clock, Building2 } from "lucide-react";
import { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules (Navigation and Pagination)
import { Navigation, Pagination } from 'swiper/modules';

const how_it_work = [
    [1, "Sign Up & Connect", "Securely link your employer's payroll and verify your details in minutes."],
    [2, "Request Your Advance", "See your earned wages available and request the amount you need."],
    [3, "Get Instant Funds", "Money is transferred directly to your bank account, often in seconds."],
    [4, "Automatic Repayment", "The advance is automatically deducted from your next paycheck – no manual effort."],
];

// ... (CustomAccordionItem and CustomAccordion remain the same)
const CustomAccordionItem = ({ value, title, children, openItem, setOpenItem }) => {
    const isOpen = openItem === value;

    const toggleAccordion = () => {
        setOpenItem(isOpen ? null : value);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 px-6 transition-all duration-300 hover:shadow-2xl">
            <button
                onClick={toggleAccordion}
                className="flex justify-between items-center w-full text-left text-xl font-semibold text-blue-700 hover:text-blue-600 transition-colors duration-200 py-5 focus:outline-none"
            >
                {title}
                <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ transitionProperty: 'max-height, opacity' }} // Explicitly define transition properties
            >
                <div className="text-gray-700 text-lg pb-5">
                    {children}
                </div>
            </div>
        </div>
    );
};

const CustomAccordion = ({ children }) => {
    const [openItem, setOpenItem] = useState(null);

    return (
        <div className="w-full space-y-6">
            {React.Children.map(children, child =>
                React.cloneElement(child, { openItem, setOpenItem })
            )}
        </div>
    );
};

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section id="home" className="relative overflow-hidden py-20 sm:py-0 px-2 text-center bg-gradient-to-br from-blue-700 to-indigo-800 text-white shadow-2xl rounded-b-[5rem] sm:rounded-b-[8rem] flex flex-col items-center justify-center">
                {/* Abstract SVG background shapes */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#6EE7B7" /> {/* Greenish */}
                                <stop offset="100%" stopColor="#3B82F6" /> {/* Blueish */}
                            </linearGradient>
                        </defs>
                        <circle cx="100" cy="150" r="80" fill="url(#grad1)" opacity="0.3" />
                        <rect x="700" y="50" width="150" height="150" fill="url(#grad1)" opacity="0.2" transform="rotate(45 775 125)" />
                        <ellipse cx="250" cy="500" rx="120" ry="60" fill="url(#grad1)" opacity="0.3" transform="rotate(20 250 500)" />
                        <polygon points="500,100 600,250 400,250" fill="url(#grad1)" opacity="0.2" transform="rotate(10 500 175)" />
                    </svg>
                </div>
                <div className="relative z-10 max-w-5xl mx-auto">
                    <section className="text-center py-20 px-4 bg-gradient-to-r">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white ">Get Paid Before Payday – Instantly</h2>
                        <p className="text-lg md:text-xl mb-8 text-cyan-300">Fast, employer-approved salary advances with zero hassle.</p>
                        <button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-xl">Request Advance</button>
                    </section>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-24 px-4 max-w-7xl mx-auto">
                <h3 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-blue-700">How FinWise Works for You</h3>

                {/* Swiper Carousel for Mobile & Tablet */}
                <div className="relative md:hidden"> {/* Hide on desktop, show on mobile/tablet */}
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20} // Space between slides
                        slidesPerView={1.1} // Show 1.1 slides to indicate more content
                        centeredSlides={true} // Center the active slide
                        pagination={{ clickable: true }} // Enable clickable pagination dots
                        navigation={true} // Enable navigation arrows
                        breakpoints={{
                            640: { // For sm screens (640px and up)
                                slidesPerView: 2.1,
                                centeredSlides: false,
                            },
                        }}
                        className="mySwiper !pb-10" // Add !pb-10 to make space for pagination dots
                    >
                        {how_it_work.map(([idx, title, desc]) => (
                            <SwiperSlide key={idx}>
                                <div className="shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl border-2 border-blue-200 bg-white transform hover:-translate-y-2 h-full flex flex-col">
                                    <div className="flex flex-col items-center space-y-4 p-8">
                                        <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-3xl font-bold border-4 border-blue-300">{idx}</div>
                                        <h4 className="text-2xl font-semibold text-blue-800 text-center">{title}</h4>
                                    </div>
                                    <div className="p-6 pt-0 flex-grow"> {/* flex-grow to make sure content pushes to bottom if needed */}
                                        <p className="text-gray-700 text-lg text-center">{desc}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Desktop Grid Layout */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Show on desktop, hide on mobile/tablet */}
                    {how_it_work.map(([idx, title, desc]) => (
                        <div key={idx} className="shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl border-2 border-blue-200 bg-white transform hover:-translate-y-2">
                            <div className="flex flex-col items-center space-y-4 p-8">
                                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-3xl font-bold border-4 border-blue-300">{idx}</div>
                                <h4 className="text-2xl font-semibold text-blue-800 text-center">{title}</h4>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="text-gray-700 text-lg text-center">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose FinWise (Features) */}
            <section id="why-choose" className="bg-gradient-to-br from-blue-100 to-indigo-100 py-24 px-4 rounded-t-[5rem] sm:rounded-t-[8rem] shadow-inner flex flex-col items-center">
                <h3 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-blue-700">Why FinWise is Your Smart Choice</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                    {/* Feature Card 1: No Credit Checks */}
                    <div className="shadow-xl rounded-2xl p-8 text-center bg-white border border-blue-200 transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <svg className="text-green-500 mb-5" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <h4 className="text-2xl font-semibold text-blue-800 mb-3">No Credit Checks</h4>
                            <p className="text-gray-700 text-lg">
                                Your credit score isn't impacted. Access funds based on what you've already earned.
                            </p>
                        </div>
                    </div>
                    {/* Feature Card 2: Bank-Grade Security */}
                    <div className="shadow-xl rounded-2xl p-8 text-center bg-white border border-blue-200 transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <svg className="text-blue-500 mb-5" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <h4 className="text-2xl font-semibold text-blue-800 mb-3">Bank-Grade Security</h4>
                            <p className="text-gray-700 text-lg">
                                Your data and transactions are protected with advanced encryption and security protocols.
                            </p>
                        </div>
                    </div>
                    {/* Feature Card 3: Instant Transfers */}
                    <div className="shadow-xl rounded-2xl p-8 text-center bg-white border border-blue-200 transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <svg className="text-yellow-500 mb-5" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <h4 className="text-2xl font-semibold text-blue-800 mb-3">Instant Transfers</h4>
                            <p className="text-gray-700 text-lg">
                                Get your money when you need it most, with funds often appearing in your account in seconds.
                            </p>
                        </div>
                    </div>
                    {/* Feature Card 4: Employer-Approved */}
                    <div className="shadow-xl rounded-2xl p-8 text-center bg-white border border-blue-200 transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <svg className="text-indigo-500 mb-5" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 20V10a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v10"></path>
                                <path d="M12 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"></path>
                                <path d="M2 22h20"></path>
                            </svg>
                            <h4 className="text-2xl font-semibold text-blue-800 mb-3">Employer-Approved</h4>
                            <p className="text-gray-700 text-lg">
                                A trusted benefit offered through your workplace, ensuring reliability and seamless integration.
                            </p>
                        </div>
                    </div>
                    {/* Feature Card 5: Avoid Costly Fees */}
                    <div className="shadow-xl rounded-2xl p-8 text-center bg-white border border-blue-200 transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <svg className="text-green-600 mb-5" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="1" x2="12" y2="23"></line>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                            <h4 className="text-2xl font-semibold text-blue-800 mb-3">Avoid Costly Fees</h4>
                            <p className="text-gray-700 text-lg">
                                A responsible alternative to high-interest loans, saving you money on fees and interest.
                            </p>
                        </div>
                    </div>
                    {/* Feature Card 6: Boosts Well-being */}
                    <div className="shadow-xl rounded-2xl p-8 text-center bg-white border border-blue-200 transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <svg className="text-purple-500 mb-5" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"></path>
                                <path d="M20 9V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"></path>
                                <path d="M12 11v6"></path>
                                <path d="M10 15h4"></path>
                            </svg>
                            <h4 className="text-2xl font-semibold text-blue-800 mb-3">Boosts Well-being</h4>
                            <p className="text-gray-700 text-lg">
                                Reduces financial stress, allowing you to focus on what matters most in your life and work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white py-20 text-center shadow-2xl rounded-t-[5rem] sm:rounded-t-[8rem] flex flex-col items-center justify-center">
                <h4 className="text-3xl font-bold mb-4">Ready to get your salary in advance?</h4>
                <button className="bg-white text-blue-700 hover:bg-gray-100 px-12 py-5 rounded-full text-xl font-semibold shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-blue-500/50">
                    Check Your Eligibility Now
                </button>
            </section>
        </>
    );
};

export default Home;