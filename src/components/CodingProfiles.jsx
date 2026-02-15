import { useState, useMemo } from 'react';
import { profiles } from '../data/initialData';

const ProfileDashboard = () => {
  const [selectedType, setSelectedType] = useState('all');
  
  const types = useMemo(() => {
    const allTypes = profiles.map(p => p.type);
    return ['all', ...new Set(allTypes)];
  }, []);

  const filteredProfiles = useMemo(() => {
    if (selectedType === 'all') return profiles;
    return profiles.filter(p => p.type === selectedType);
  }, [selectedType]);

  // Simple stats for sidebar
  const stats = useMemo(() => {
    const typeCount = profiles.reduce((acc, p) => {
      acc[p.type] = (acc[p.type] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(typeCount).sort((a, b) => b[1] - a[1]);
  }, []);

  return (
    <div className="flex min-h-screen bg-black text-gray-300">
      {/* Minimal Sidebar Stats */}
      <div className="w-64 border-r border-gray-800 p-6 hidden md:block">
        <div className="mb-8">
          <h1 className="text-xl font-light tracking-wider text-white">Profiles</h1>
          <p className="text-xs text-gray-600 mt-1">total {profiles.length}</p>
        </div>
        
        <div className="space-y-3">
          {stats.map(([type, count]) => (
            <div key={type} className="text-xs">
              <div className="flex justify-between mb-1">
                <span className="text-gray-500">{type}</span>
                <span className="text-gray-400">{count}</span>
              </div>
              <div className="h-px bg-gray-800 w-full">
                <div 
                  className="h-px bg-gray-400" 
                  style={{ width: `${(count / profiles.length) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Filter chips */}
        <div className="mt-8 space-y-1">
          {types.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`w-full text-left px-3 py-1.5 text-sm rounded transition ${
                selectedType === type 
                  ? 'bg-gray-900 text-white' 
                  : 'text-gray-600 hover:text-gray-400'
              }`}
            >
              {type === 'all' ? 'Everything' : type}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content - Clean Grid */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {filteredProfiles.map((profile, i) => (
            <a
              key={i}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 hover:bg-gray-900/50 transition-all duration-200 border border-transparent hover:border-gray-800 rounded-sm"
            >
              <div className="flex items-center gap-2">
                {/* Icon dot instead of full image */}
                <div 
                  className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-gray-400 transition-colors"
                />
                <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors truncate">
                  {profile.name}
                </span>
              </div>
              <p className="text-xs text-gray-700 mt-1 line-clamp-1 pl-3.5">
                {profile.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile filter - minimal */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 p-3">
        <select 
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full bg-gray-900 text-gray-400 text-sm border border-gray-800 rounded-sm p-2"
        >
          {types.map(type => (
            <option key={type} value={type}>
              {type === 'all' ? 'all profiles' : type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProfileDashboard;