import { useState, useMemo } from 'react';
import { profiles } from '../data/initialData';

const ProfileDashboard = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  
  const types = useMemo(() => {
    const allTypes = profiles.map(p => p.type);
    return ['all', ...new Set(allTypes)];
  }, []);

  const filteredProfiles = useMemo(() => {
    if (selectedType === 'all') return profiles;
    return profiles.filter(p => p.type === selectedType);
  }, [selectedType]);

  const typeCounts = useMemo(() => {
    const counts = {};
    profiles.forEach(p => {
      counts[p.type] = (counts[p.type] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Bold Header with diagonal split */}
      <div className="relative bg-gradient-to-r from-purple-600 to-orange-500 h-48 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              PROFILE
              <span className="block text-orange-200">DIRECTORY</span>
            </h1>
            <p className="text-purple-100 mt-2 font-medium">
              {profiles.length} profiles · {types.length - 1} categories
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar - Industrial style */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Category Pills */}
            <div className="flex-1 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  selectedType === 'all'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700'
                }`}
              >
                All
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  selectedType === 'all' ? 'bg-purple-500' : 'bg-zinc-700 text-zinc-300'
                }`}>
                  {profiles.length}
                </span>
              </button>
              
              {types.filter(t => t !== 'all').map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    selectedType === type
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700'
                  }`}
                >
                  {type}
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    selectedType === type ? 'bg-orange-400' : 'bg-zinc-700 text-zinc-300'
                  }`}>
                    {typeCounts[type]}
                  </span>
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-zinc-800 p-1 rounded-lg border border-zinc-700">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-orange-500 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Profiles Display */}
        {viewMode === 'grid' ? (
          /* Grid View - Bold cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProfiles.map((profile, i) => (
              <a
                key={i}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-zinc-800 border-2 border-zinc-700 hover:border-purple-600 rounded-xl p-6 transition-all hover:translate-y-[-2px]"
              >
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-600/20 to-orange-500/20 rounded-bl-3xl rounded-tr-xl"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">
                        {profile.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      i % 2 === 0 
                        ? 'bg-purple-600/20 text-purple-300 border border-purple-600/30' 
                        : 'bg-orange-600/20 text-orange-300 border border-orange-600/30'
                    }`}>
                      {profile.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {profile.name}
                  </h3>
                  
                  {profile.description && (
                    <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
                      {profile.description}
                    </p>
                  )}
                  
                  <div className="flex items-center text-sm text-orange-500 font-medium">
                    <span>View profile</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          /* List View - Bold list */
          <div className="space-y-3">
            {filteredProfiles.map((profile, i) => (
              <a
                key={i}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-zinc-800 border border-zinc-700 hover:border-orange-500 rounded-xl p-4 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    i % 2 === 0 ? 'bg-purple-600' : 'bg-orange-500'
                  }`}>
                    <span className="text-white font-bold">
                      {profile.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-semibold truncate group-hover:text-orange-400 transition-colors">
                        {profile.name}
                      </h3>
                      <span className="text-xs text-zinc-500">·</span>
                      <span className="text-xs text-zinc-400">{profile.type}</span>
                    </div>
                    
                    {profile.description && (
                      <p className="text-sm text-zinc-500 truncate">
                        {profile.description}
                      </p>
                    )}
                  </div>
                  
                  <svg className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredProfiles.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block p-6 bg-zinc-800/50 rounded-2xl border border-zinc-700 mb-4">
              <span className="text-5xl">👀</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No profiles found</h3>
            <p className="text-zinc-400 mb-4">Try selecting a different category</p>
            <button
              onClick={() => setSelectedType('all')}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
            >
              View all profiles
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden">
        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-2 shadow-2xl">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full bg-zinc-900 text-white border border-zinc-700 rounded-lg px-4 py-3 text-sm font-medium"
          >
            {types.map(type => (
              <option key={type} value={type}>
                {type === 'all' ? '📁 All categories' : `📌 ${type} (${typeCounts[type] || 0})`}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;