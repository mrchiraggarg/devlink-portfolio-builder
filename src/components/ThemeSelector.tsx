import React from 'react';
import { ThemeType } from '../types';
import { Monitor, Terminal, Minimize2 } from 'lucide-react';

interface ThemeSelectorProps {
  selectedTheme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ selectedTheme, onThemeChange }) => {
  const themes = [
    {
      id: 'card' as ThemeType,
      name: 'Modern Card',
      description: 'Clean and modern design with cards and gradients',
      icon: Monitor,
      preview: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'terminal' as ThemeType,
      name: 'Terminal',
      description: 'Developer-focused dark theme with terminal aesthetics',
      icon: Terminal,
      preview: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)'
    },
    {
      id: 'minimal' as ThemeType,
      name: 'Minimal',
      description: 'Clean and minimal design with subtle accents',
      icon: Minimize2,
      preview: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }
  ];

  return (
    <div className="flex space-x-3">
      {themes.map((theme) => {
        const Icon = theme.icon;
        return (
          <button
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            className={`group relative flex items-center px-3 py-2 rounded-lg transition-all ${
              selectedTheme === theme.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Icon className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">{theme.name}</span>
            
            {/* Theme Preview */}
            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full border-2 border-white shadow-sm"
                 style={{ background: theme.preview }}
            />
          </button>
        );
      })}
    </div>
  );
};