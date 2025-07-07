import React, { useState } from 'react';
import { FormBuilder } from './components/FormBuilder';
import { ThemeSelector } from './components/ThemeSelector';
import { PortfolioPreview } from './components/PortfolioPreview';
import { ExportOptions } from './components/ExportOptions';
import { PortfolioData, ThemeType } from './types';
import { Eye, Code, Download, Palette, FileText } from 'lucide-react';

const initialData: PortfolioData = {
  personalInfo: {
    name: 'John Doe',
    title: 'Full Stack Developer',
    email: 'john@example.com',
    bio: 'Passionate developer with 5+ years of experience building scalable web applications. I love creating clean, efficient code and solving complex problems.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
  },
  projects: [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/johndoe/ecommerce',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop'
    },
    {
      id: '2',
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasting and beautiful UI animations.',
      technologies: ['React', 'OpenWeather API', 'CSS Animations'],
      liveUrl: 'https://weather-app.com',
      githubUrl: 'https://github.com/johndoe/weather-app',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop'
    }
  ],
  socials: [
    { platform: 'GitHub', url: 'https://github.com/johndoe', icon: 'Github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/johndoe', icon: 'Linkedin' },
    { platform: 'Twitter', url: 'https://twitter.com/johndoe', icon: 'Twitter' }
  ],
  blogs: [
    {
      id: '1',
      title: 'Building Scalable React Applications',
      description: 'Learn best practices for structuring large React applications with proper state management and component architecture.',
      url: 'https://medium.com/@johndoe/building-scalable-react-apps',
      publishedAt: '2024-01-15'
    }
  ],
  skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker', 'GraphQL', 'Python']
};

function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(initialData);
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>('card');
  const [activeView, setActiveView] = useState<'builder' | 'preview'>('builder');
  const [showExportOptions, setShowExportOptions] = useState(false);

  const viewToggleButtons = [
    { id: 'builder', label: 'Builder', icon: FileText },
    { id: 'preview', label: 'Preview', icon: Eye }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <Code className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">DevLink</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* View Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                {viewToggleButtons.map((button) => {
                  const Icon = button.icon;
                  return (
                    <button
                      key={button.id}
                      onClick={() => setActiveView(button.id as any)}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all ${
                        activeView === button.id
                          ? 'bg-white text-blue-600 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {button.label}
                    </button>
                  );
                })}
              </div>

              {/* Theme Selector */}
              <button
                onClick={() => setShowExportOptions(!showExportOptions)}
                className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Palette className="w-4 h-4 mr-2" />
                Themes
              </button>

              {/* Export Button */}
              <button
                onClick={() => setShowExportOptions(!showExportOptions)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeView === 'builder' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Builder */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Build Your Portfolio
                </h1>
                <p className="text-gray-600">
                  Create a stunning developer portfolio in minutes. Fill out the form and watch your portfolio come to life.
                </p>
              </div>
              
              <FormBuilder
                data={portfolioData}
                onChange={setPortfolioData}
              />
            </div>

            {/* Live Preview */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Live Preview</h2>
                <ThemeSelector
                  selectedTheme={selectedTheme}
                  onThemeChange={setSelectedTheme}
                />
              </div>
              
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-500">
                    yourname.devlink.app
                  </div>
                </div>
                
                <div className="max-h-[800px] overflow-y-auto">
                  <PortfolioPreview
                    data={portfolioData}
                    theme={selectedTheme}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Full Preview */
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">Portfolio Preview</h1>
              <ThemeSelector
                selectedTheme={selectedTheme}
                onThemeChange={setSelectedTheme}
              />
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <PortfolioPreview
                data={portfolioData}
                theme={selectedTheme}
              />
            </div>
          </div>
        )}
      </main>

      {/* Export Options Modal */}
      {showExportOptions && (
        <ExportOptions
          data={portfolioData}
          theme={selectedTheme}
          onClose={() => setShowExportOptions(false)}
        />
      )}
    </div>
  );
}

export default App;