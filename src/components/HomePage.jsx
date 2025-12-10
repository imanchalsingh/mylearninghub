import React, { useState, useEffect } from 'react';
import {
    CodeBracketIcon,
    RocketLaunchIcon,
    SparklesIcon,
    ArrowRightIcon,
    CommandLineIcon,
    CpuChipIcon,
    ServerStackIcon,
    CloudArrowUpIcon,
    MoonIcon,
    SunIcon
} from '@heroicons/react/24/outline';
import { profiles } from '../data/initialData';

const HomePage = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const rotatingTexts = [
        "Full Stack Developer",
        "Problem Solver",
        "Front-End Engineer",
        "Open Source Contributor",
        "Tech Enthusiast",
        "Web Developer",
        "Continuous Learner",
        "UI/UX Designer",
        "DevOps Engineer",
        "Cloud Architect",
        "Front-End Developer",

    ];

    // Mouse move effect for interactive background
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
                setFade(true);
            }, 300);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    const totalProfiles = profiles.length;
    const platformTypes = [...new Set(profiles.map(p => p.type))].length;

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden font-['Josefin_Sans'] transition-colors duration-700">

            {/* Interactive linear Background */}
            <div className="fixed inset-0 overflow-hidden">
                {/* Animated linear Orbs */}
                <div
                    className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-linear-to-r from-red-500/20 via-rose-500/15 to-pink-500/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-linear-to-r from-rose-500/15 via-pink-500/10 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"
                    style={{
                        transform: `translate(${-mousePosition.x * 0.008}px, ${-mousePosition.y * 0.008}px)`
                    }}
                />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-linear(to_right,#f5f5f5_1px,transparent_1px),linear-linear(to_bottom,#f5f5f5_1px,transparent_1px)] dark:bg-[linear-linear(to_right,#1a1a1a_1px,transparent_1px),linear-linear(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size:64px_64px mask-image:radial-linear(ellipse_at_center,black_30%,transparent_70%)"></div>

                {/* Animated Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-linear-to-r from-red-500 to-rose-600 rounded-full animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${3 + Math.random() * 4}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Navbar */}
            <nav className="relative z-50 py-8 px-4 md:px-12">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-4">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-linear-to-r from-red-600 to-rose-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative w-14 h-14 rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center border-2 border-white/30 dark:border-gray-800/30">
                                <CodeBracketIcon className="h-8 w-8 text-linear bg-linear-to-r from-red-600 to-rose-600" />
                            </div>
                        </div>
                        <div>
                            <span className="text-3xl font-bold bg-linear-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent font-['Kanit'] tracking-tight">
                                MyLearningHub
                            </span>
                            <div className="text-xs text-gray-500 dark:text-gray-400 tracking-widest uppercase mt-1">
                                Digital Presence
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative z-10 pt-16 md:pt-32 pb-20 px-4 md:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column - Content */}
                        <div className="text-left">
                            {/* Badge */}
                            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-linear-to-r from-red-50/80 to-rose-50/80 dark:from-red-900/20 dark:to-rose-900/20 backdrop-blur-sm border border-red-100 dark:border-red-900/30 mb-8 group hover:scale-105 transition-all duration-300">
                                <div className="relative mr-3">
                                    <div className="absolute inset-0 bg-linear-to-r from-red-600 to-rose-600 rounded-full blur animate-pulse"></div>
                                    <SparklesIcon className="relative h-5 w-5 text-linear bg-linear-to-r from-red-600 to-rose-600 group-hover:rotate-180 transition-all duration-500" />
                                </div>
                                <span className="text-sm font-bold text-linear bg-linear-to-r from-red-700 to-rose-700 dark:from-red-400 dark:to-rose-400 bg-clip-text text-transparent tracking-wider">
                                    Digital Developer Portfolio
                                </span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight font-['Kanit']">
                                <span className="block text-gray-900 dark:text-white mb-4">
                                    Crafting
                                </span>
                                <span className="relative inline-block">
                                    <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 via-rose-500 to-pink-600 animate-linear bg-size-[200%_auto]">
                                        Digital
                                    </span>
                                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-red-500 via-rose-500 to-pink-600 rounded-full animate-pulse"></span>
                                </span>
                                <span className="block text-gray-900 dark:text-white mt-4">
                                    Experiences
                                </span>
                            </h1>

                            {/* Rotating Text */}
                            <div className="mb-10">
                                <div className="h-20 overflow-hidden">
                                    <p className={`text-3xl text-gray-600 dark:text-gray-300 transition-all duration-500 transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                                        <span className="text-linear bg-linear-to-r from-red-600 to-rose-600 bg-clip-text text-transparent font-bold font-['Kanit']">
                                            {rotatingTexts[textIndex]}
                                        </span>
                                    </p>
                                </div>
                                <div className="w-24 h-0.5 bg-linear-to-r from-red-500/50 to-rose-500/50 rounded-full mt-4"></div>
                            </div>

                            {/* Description */}
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl leading-relaxed font-light">
                                Welcome to my interactive developer hub. Explore my coding journey across {platformTypes} different platforms,
                                showcasing {totalProfiles}+ profiles filled with projects, achievements, and continuous learning in the world of technology.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6">
                                <a
                                    href="#coding-profiles"
                                    className="group relative inline-flex items-center justify-center px-10 py-3 text-lg font-bold text-white overflow-hidden rounded-full transition-all duration-500 transform hover:-translate-y-1"
                                >
                                    <div className="absolute inset-0 bg-linear-to-r from-red-600 via-rose-600 to-pink-600"></div>
                                    <div className="absolute inset-0 bg-linear-to-r from-red-700 via-rose-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                    <div className="relative flex items-center">
                                        <span className="mr-3">Explore My Profiles</span>
                                        <ArrowRightIcon className="h-6 w-6 transform group-hover:translate-x-2 transition-all duration-300" />
                                    </div>
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-500"></div>
                                </a>
                            </div>

                            {/* Quick Stats */}
                            <div className="flex items-center gap-8 mt-12">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-linear bg-linear-to-r from-red-600 to-rose-600 bg-clip-text text-transparent font-['Kanit']">
                                        {totalProfiles}+
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Profiles</div>
                                </div>
                                <div className="w-1 h-8 bg-linear-to-b from-red-500/50 to-rose-500/50 rounded-full"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-linear bg-linear-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-['Kanit']">
                                        {platformTypes}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Platforms</div>
                                </div>
                                <div className="w-1 h-8 bg-linear-to-b from-rose-500/50 to-pink-500/50 rounded-full"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-linear bg-linear-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-['Kanit']">
                                        24/7
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Active</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Interactive Cards */}
                        <div className="relative">
                            <div className="relative w-full max-w-xl mx-auto">
                                {/* Floating Card 1 */}
                                <div className="absolute -top-10 -left-10 w-72 h-80 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 dark:border-gray-800/50 shadow-2xl transform rotate-3 animate-float group hover:rotate-0 transition-all duration-500">
                                    <div className="relative mb-6">
                                        <div className="absolute inset-0 bg-linear-to-r from-red-500 to-rose-600 rounded-2xl blur opacity-20 group-hover:opacity-30"></div>
                                        <div className="relative w-16 h-16 rounded-2xl bg-linear-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 flex items-center justify-center">
                                            <CommandLineIcon className="h-8 w-8 text-linear bg-linear-to-r from-red-600 to-rose-600" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-['Kanit']">Clean Code</h3>
                                    <p className="text-gray-600 dark:text-gray-300 font-light">Writing maintainable and efficient solutions</p>
                                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-linear-to-r from-red-500 to-rose-600 rounded-full animate-pulse"></div>
                                </div>

                                {/* Floating Card 2 */}
                                <div className="absolute -bottom-10 -right-10 w-72 h-80 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 dark:border-gray-800/50 shadow-2xl transform -rotate-3 animate-float animation-delay-2000 group hover:rotate-0 transition-all duration-500">
                                    <div className="relative mb-6">
                                        <div className="absolute inset-0 bg-linear-to-r from-rose-500 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30"></div>
                                        <div className="relative w-16 h-16 rounded-2xl bg-linear-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 flex items-center justify-center">
                                            <CpuChipIcon className="h-8 w-8 text-linear bg-linear-to-r from-rose-600 to-pink-600" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-['Kanit']">Fast Learning</h3>
                                    <p className="text-gray-600 dark:text-gray-300 font-light">Mastering new technologies rapidly</p>
                                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-linear-to-r from-rose-500 to-pink-600 rounded-full animate-pulse"></div>
                                </div>

                                {/* Main Card */}
                                <div className="relative z-10 w-full h-[500px] rounded-3xl overflow-hidden group">
                                    <div className="absolute inset-0 bg-linear-to-br from-red-500/10 via-rose-500/10 to-pink-500/10 dark:from-red-500/5 dark:via-rose-500/5 dark:to-pink-500/5 backdrop-blur-sm"></div>
                                    <div className="absolute inset-0 bg-[radial-linear(ellipse_at_center,var(--tw-linear-stops))] from-red-500/5 via-transparent to-transparent"></div>
                                    <div className="absolute inset-0 border-2 border-red-100 dark:border-red-900/30 rounded-3xl"></div>

                                    <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
                                        <div className="relative mb-10">
                                            <div className="absolute inset-0 bg-linear-to-r from-red-600 to-rose-600 rounded-full blur-2xl animate-pulse"></div>
                                            <div className="relative w-40 h-40 rounded-full bg-linear-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center border-4 border-white/30 dark:border-gray-800/30">
                                                <div className="w-32 h-32 rounded-full bg-linear-to-r from-red-600 via-rose-600 to-pink-600 flex items-center justify-center animate-spin-slow">
                                                    <CodeBracketIcon className="h-20 w-20 text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm mb-6 border-2 border-white/20 dark:border-gray-800/50 group-hover:border-red-300 dark:group-hover:border-red-800 transition-all duration-300">
                                                <ServerStackIcon className="h-5 w-5 text-linear bg-linear-to-r from-red-600 to-rose-600 mr-3" />
                                                <span className="text-lg font-bold bg-linear-to-r from-red-700 to-rose-700 dark:from-red-400 dark:to-rose-400 bg-clip-text text-transparent">
                                                    Multi-Platform Developer
                                                </span>
                                            </div>

                                            <p className="text-gray-700 dark:text-gray-300 text-xl font-light max-w-md">
                                                Showcasing expertise across diverse coding ecosystems and technologies
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Stats Section */}
            <div className="relative z-10 py-16 px-4 md:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            {
                                number: "100+",
                                label: "Projects",
                                suffix: "Completed",
                                icon: CloudArrowUpIcon,
                                color: "from-red-600 to-rose-600"
                            },
                            {
                                number: "2000+",
                                label: "Code",
                                suffix: "Commits",
                                icon: CommandLineIcon,
                                color: "from-rose-600 to-pink-600"
                            },
                            {
                                number: "50+",
                                label: "Technologies",
                                suffix: "Mastered",
                                icon: CpuChipIcon,
                                color: "from-pink-600 to-purple-600"
                            },
                            {
                                number: "∞",
                                label: "Passion",
                                suffix: "For Innovation",
                                icon: SparklesIcon,
                                color: "from-purple-600 to-indigo-600"
                            }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="relative group"
                            >
                                <div className={`absolute -inset-0.5 bg-linear-to-r ${stat.color} rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500`}></div>
                                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-800/50 transition-all duration-500 hover:scale-105">
                                    <div className="flex items-center justify-between mb-6">
                                        <stat.icon className={`h-10 w-10 text-linear bg-linear-to-r ${stat.color}`} />
                                        <div className="w-3 h-3 bg-linear-to-r from-red-500 to-rose-600 rounded-full animate-pulse"></div>
                                    </div>
                                    <div className="text-4xl md:text-5xl font-bold mb-2 font-['Kanit']">
                                        <span className={`text-linear bg-linear-to-r ${stat.color} bg-clip-text text-transparent`}>
                                            {stat.number}
                                        </span>
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-400">
                                        <span className="font-semibold text-gray-800 dark:text-gray-200">{stat.label}</span>{" "}
                                        {stat.suffix}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;