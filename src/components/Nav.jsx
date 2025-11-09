import React, { useState, useEffect } from "react";
const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 10) {
            setIsScrolled(true);
        }
        else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700' : 'bg-transparent'} `}>
            <div className="container mx-auto px-3 md:px-6 py-3 flex justify-center">
                <h1
                    className={`text-2xl md:text-2xl font-['Engagement'] font-bold bg-linear-to-r from-pink-500 via-purple-500 to-teal-400 bg-clip-text text-transparent transition-all duration-300 ${isScrolled
                        ? 'relative after:content-[""] after:block after:h-1 after:w-full after:rounded-full after:mt-1 after:bg-linear-to-r after:from-pink-500 after:via-purple-500 after:to-teal-400 transition-all duration-300'
                        : ''
                        }`}
                >
                    My Learning & Coding Profiles
                </h1>

            </div>
        </nav>
    );
}
export default Nav;