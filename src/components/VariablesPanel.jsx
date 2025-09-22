import React from 'react';

const VariablesPanel = ({ isDarkMode, showVariables, commandVariables, setCommandVariables, updateVariable }) => {
  if (!showVariables) return null;
  return (
    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Variables</h3>
          <button
            onClick={() => setCommandVariables({
              IP: '10.10.10.1',
              DOMAIN: 'Santic.htb',
              USER: 'Santino',
              PASSWORD: 'SuperSecret',
              USER_WORDLIST_PATH: '/usr/share/wordlists/rockyou.txt',
              DCIP: '10.10.10.1'
            })}
            className={`px-2 py-1 text-xs rounded transition-colors ${
              isDarkMode 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Reset
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            ['IP', 'ip'],
            ['DOMAIN', 'domain'],
            ['USER', 'user'],
            ['PASSWORD', 'password'],
            ['USER_WORDLIST_PATH', 'wordlist path'],
            ['DCIP', 'dc ip']
          ].map(([key, placeholder]) => (
            <div key={key}>
              <label className={`block text-xs font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{key}</label>
              <input
                type="text"
                value={commandVariables[key] || ''}
                onChange={(e) => updateVariable(key, e.target.value)}
                placeholder={placeholder}
                className={`w-full px-2 py-1.5 text-sm border rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VariablesPanel;


