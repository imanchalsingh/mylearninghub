import React, { useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { profiles } from "../data/initialData";

const CodingProfiles = () => {
  const [filterType, setFilterType] = useState("all");


  // Get unique types for the dropdown filter
  const uniqueTypes = ["all", ...new Set(profiles.map((p) => p.type))];

  // Filter profiles based on type only...
  const filteredProfiles = profiles.filter((profile) => {
    return filterType === "all" || profile.type === filterType;
  });


  return (
    <section id="coding-profiles" className="py-20 bg-linear-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 font-['Kanit'] transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-16">
          <div>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-4">
              A collection of my coding profiles across various platforms showcasing my learning journey and coding activities.
            </p>
            <div className="w-60 h-1.5 bg-linear-to-r from-teal-500 to-blue-500 rounded-full"></div>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex justify-center md:justify-end w-full md:w-auto">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2.5 rounded-lg text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300 ease-in-out shadow-sm"
              >
                {uniqueTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === "all" ? "All Types" : type.replace("-", " ")}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.map((profile) => (
            <div
              key={profile.name}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-teal-200 dark:hover:border-teal-800 group"
            >
              <div className="flex items-center mb-5">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 flex items-center justify-center mr-4 overflow-hidden group-hover:from-blue-200 group-hover:to-teal-200 dark:group-hover:from-blue-800/40 dark:group-hover:to-teal-800/40 transition-all duration-300">
                  <img
                    src={profile.icon}
                    alt={profile.name}
                    className="object-contain w-10 h-10 rounded-lg bg-amber-50 p-1"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 flex items-center gap-2">
                    {profile.name}
                  </h3>
                  <p>
                    <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                      {profile.type.replace("-", " ")}
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {profile.description}
              </p>

              <a
                href={profile.link}
                className="flex items-center justify-between mt-2 px-5 py-3 bg-linear-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 text-teal-600 dark:text-teal-400 rounded-xl hover:from-blue-100 hover:to-teal-100 dark:hover:from-blue-800/30 dark:hover:to-teal-800/30 transition-all duration-300 group-hover:shadow-md border border-blue-100 dark:border-blue-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-medium">Visit Profile</span>
                <ArrowTopRightOnSquareIcon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
