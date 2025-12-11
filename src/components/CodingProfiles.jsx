import React, { useState } from "react";
import {
  ArrowTopRightOnSquareIcon,
  FireIcon,
  ChartBarIcon,
  CodeBracketIcon,
  SparklesIcon,
  TrophyIcon,
  BoltIcon,
  StarIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import { profiles } from "../data/initialData";

const CodingProfiles = () => {
  const [filterType, setFilterType] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const uniqueTypes = ["all", ...new Set(profiles.map((p) => p.type))];
  const filteredProfiles = profiles.filter((profile) => {
    return filterType === "all" || profile.type === filterType;
  });

  const totalProfiles = profiles.length;
  const platformTypes = uniqueTypes.length - 1;

  return (
    <section id="coding-profiles" className="relative py-24 bg-linear-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden font-['Josefin_Sans']">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-linear-to-br from-red-500 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-linear-to-tr from-rose-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-linear-to-r from-transparent via-red-500/5 to-transparent"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-linear(to_right,#f0f0f0_1px,transparent_1px),linear-linear(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-linear(to_right,#1f2937_1px,transparent_1px),linear-linear(to_bottom,#1f2937_1px,transparent_1px)] bg-size:4rem_4rem mask-[radial-linear(ellipse_at_center,black_20%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-linear-to-r from-red-500 to-rose-600"></span>
            </span>
            <span className="text-linear bg-linear-to-r from-red-600 to-rose-600 bg-clip-text text-transparent font-bold tracking-wider text-sm uppercase font-['Kanit']">
              <SparklesIcon className="w-4 h-4 inline-block mr-2" />
              Digital Footprint
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-['Kanit']">
            <span className="text-gray-900 dark:text-white">My</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 via-rose-500 to-pink-600 mx-4">
              Coding
            </span>
            <span className="text-gray-900 dark:text-white">Universe</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-14 leading-relaxed font-light">
            Navigating through different platforms where code meets creativity.
            Each profile is a unique chapter in my ongoing journey of learning, building, and innovating.
          </p>

          {/* Enhanced Stats Bar */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-red-500 to-rose-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 shadow-2xl hover:shadow-red-500/20 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 font-['Kanit']">{totalProfiles}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Profiles</div>
                  </div>
                  <div className="p-4 bg-linear-to-br from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30 rounded-xl">
                    <FireIcon className="h-8 w-8 text-linear bg-linear-to-r from-red-500 to-rose-600" />
                  </div>
                </div>
                <div className="mt-4 text-xs text-red-500 dark:text-red-400 flex items-center gap-2">
                  <BoltIcon className="w-4 h-4" />
                  Actively Growing
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-rose-500 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 shadow-2xl hover:shadow-rose-500/20 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 font-['Kanit']">{platformTypes}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Platform Types</div>
                  </div>
                  <div className="p-4 bg-linear-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 rounded-xl">
                    <ChartBarIcon className="h-8 w-8 text-linear bg-linear-to-r from-rose-500 to-pink-600" />
                  </div>
                </div>
                <div className="mt-4 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-2">
                  <TrophyIcon className="w-4 h-4" />
                  Diverse Expertise
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-pink-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 shadow-2xl hover:shadow-pink-500/20 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 font-['Kanit']">24/7</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Active Learning</div>
                  </div>
                  <div className="p-4 bg-linear-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-xl">
                    <CodeBracketIcon className="h-8 w-8 text-linear bg-linear-to-r from-pink-500 to-purple-600" />
                  </div>
                </div>
                <div className="mt-4 text-xs text-pink-500 dark:text-pink-400 flex items-center gap-2">
                  <SparklesIcon className="w-4 h-4" />
                  Continuous Growth
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 font-['Kanit']">∞</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Projects Built</div>
                  </div>
                  <div className="p-4 bg-linear-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl">
                    <SparklesIcon className="h-8 w-8 text-linear bg-linear-to-r from-purple-500 to-indigo-600" />
                  </div>
                </div>
                <div className="mt-4 text-xs text-purple-500 dark:text-purple-400 flex items-center gap-2">
                  <BoltIcon className="w-4 h-4" />
                  Infinite Potential
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Filter Tabs */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-['Kanit']">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-rose-600">
                  Platform
                </span>{" "}
                Explorer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Filter through different coding platforms to explore specific skills and achievements
              </p>
            </div>
          </div>

          {/* Platform Type Chips - Only keeping this filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button
              onClick={() => setFilterType("all")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 font-['Kanit'] ${filterType === "all"
                ? "bg-linear-to-r from-red-600 to-rose-600 text-white shadow-2xl shadow-red-500/30"
                : "bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-700/50 border-2 border-gray-100 dark:border-gray-700"
                }`}
            >
              ALL PLATFORMS
            </button>
            {uniqueTypes.filter(type => type !== "all").map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 font-['Kanit'] ${filterType === type
                  ? "bg-linear-to-r from-red-600 to-rose-600 text-white shadow-2xl shadow-red-500/30"
                  : "bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-700/50 border-2 border-gray-100 dark:border-gray-700"
                  }`}
              >
                {type.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {filteredProfiles.map((profile, index) => (
            <div
              key={profile.name}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Animated Border */}
              <div className={`absolute -inset-0.5 bg-linear-to-r from-red-500 via-rose-500 to-pink-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500 ${hoveredCard === index ? 'opacity-40' : ''
                }`}></div>

              <div className="relative bg-linear-to-br from-white/90 via-white/80 to-white/60 dark:from-gray-900/90 dark:via-gray-900/80 dark:to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/30 shadow-2xl hover:shadow-red-500/10 transition-all duration-500 transform hover:-translate-y-2">

                {/* Platform Badge */}
                <div className="absolute -top-3 right-6">
                  <span className="px-4 py-2 bg-linear-to-r from-red-600 to-rose-600 text-white text-xs font-bold rounded-full shadow-lg shadow-red-500/30 uppercase tracking-wider font-['Kanit']">
                    {profile.type.replace("-", " ")}
                  </span>
                </div>

                <div className="relative mb-8">
                  <div className="flex items-center gap-6">
                    {/* Icon Container */}
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 bg-linear-to-r from-red-500 to-rose-600 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative w-20 h-20 rounded-3xl bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center border-2 border-white/50 dark:border-gray-700/50 group-hover:border-red-200 dark:group-hover:border-red-800/50 transition-all duration-500">
                        <img
                          src={profile.icon}
                          alt={profile.name}
                          className="relative w-12 h-12 object-contain filter group-hover:brightness-110 transition-all duration-500"
                        />
                      </div>
                    </div>

                    {/* Name and Username Container */}
                    <div>
                      <h3 className=" px-3 py-1 rounded-full text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-linear group-hover:bg-linear-to-r group-hover:from-red-600 group-hover:to-rose-600 transition-all duration-300 font-['Kanit'] truncate">
                        {profile.name}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed line-clamp-3 font-light">
                    {profile.description}
                  </p>
                </div>

                {/* Stats Bar (if available) */}
                {profile.stats && (
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    {profile.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white font-['Kanit']">{stat.value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Updated Action Button */}
                <a
                  href={profile.link}
                  className="group/btn relative inline-flex items-center justify-between w-full py-4 px-6 rounded-xl overflow-hidden transition-all duration-500 bg-white/50 dark:bg-gray-800/50 border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-red-300 dark:hover:border-red-700/50 hover:shadow-lg hover:shadow-red-500/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-linear-to-r from-red-600/0 via-rose-600/0 to-pink-600/0 group-hover/btn:from-red-600/10 group-hover/btn:via-rose-600/10 group-hover/btn:to-pink-600/10 transition-all duration-500"></div>

                  {/* Left side - Text */}
                  <div className="relative flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30 flex items-center justify-center group-hover/btn:from-red-200 group-hover/btn:to-rose-200 dark:group-hover/btn:from-red-800/50 dark:group-hover/btn:to-rose-800/50 transition-all duration-300">
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 text-red-600 dark:text-red-400 group-hover/btn:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="px-2 py-1 rounded-full font-bold text-gray-800 dark:text-gray-200 text-sm tracking-wider font-['Kanit'] group-hover/btn:text-linear group-hover/btn:bg-linear-to-r group-hover/btn:from-red-600 group-hover/btn:to-rose-600 transition-all duration-300">
                      Explore Profile
                    </span>
                  </div>

                  {/* Right side - Arrow */}
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-linear-to-r from-red-600/0 to-rose-600/0 group-hover/btn:from-red-600 group-hover/btn:to-rose-600 flex items-center justify-center transition-all duration-500">
                      <ChevronRightIcon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Pulse effect on hover */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover/btn:border-red-300/30 dark:group-hover/btn:border-red-700/30 transition-all duration-500"></div>
                </a>

                {/* Rating (if available) */}
                {profile.rating && (
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 ${i < profile.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300 dark:text-gray-600"
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{profile.rating}/5</span>
                  </div>
                )}

                {/* Hover Effect Lines */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-red-500/0 to-transparent group-hover:via-red-500/50 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProfiles.length === 0 && (
          <div className="text-center py-24">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 bg-linear-to-r from-red-500 to-rose-600 rounded-full blur-xl opacity-20"></div>
              <div className="relative w-full h-full flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-full border border-white/20 dark:border-gray-700/50">
                <svg className="w-16 h-16 text-linear bg-linear-to-r from-red-500 to-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-['Kanit']">
              No Profiles Found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto text-lg">
              Try selecting a different platform type or explore other sections while we add more profiles.
            </p>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            <span className="text-linear bg-linear-to-r from-red-500 to-rose-600 bg-clip-text text-transparent font-bold font-['Kanit']">
              Note:
            </span>{" "}
            All profiles are regularly updated with new projects and achievements
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;