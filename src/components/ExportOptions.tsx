import React, { useState } from 'react';
import { PortfolioData, ThemeType } from '../types';
import { Download, Globe, Github, X, Copy, Check } from 'lucide-react';

interface ExportOptionsProps {
  data: PortfolioData;
  theme: ThemeType;
  onClose: () => void;
}

export const ExportOptions: React.FC<ExportOptionsProps> = ({ data, theme, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [selectedOption, setSelectedOption] = useState<'zip' | 'github' | 'vercel' | 'subdomain'>('zip');

  const handleCopyCode = async () => {
    const portfolioCode = generatePortfolioCode(data, theme);
    await navigator.clipboard.writeText(portfolioCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generatePortfolioCode = (data: PortfolioData, theme: ThemeType): string => {
    return `// Generated Portfolio Code
import React from 'react';

const PortfolioData = ${JSON.stringify(data, null, 2)};

export default function Portfolio() {
  return (
    <div className="${theme === 'terminal' ? 'bg-black text-green-400' : theme === 'minimal' ? 'bg-white text-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}">
      {/* Your generated portfolio code here */}
    </div>
  );
}`;
  };

  const exportOptions = [
    {
      id: 'zip',
      title: 'Download as ZIP',
      description: 'Download complete React project with all dependencies',
      icon: Download,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      id: 'github',
      title: 'Deploy to GitHub Pages',
      description: 'Automatically create repository and deploy to GitHub Pages',
      icon: Github,
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      id: 'vercel',
      title: 'Deploy to Vercel',
      description: 'One-click deployment to Vercel with custom domain',
      icon: Globe,
      color: 'bg-black hover:bg-gray-800'
    },
    {
      id: 'subdomain',
      title: 'DevLink Subdomain',
      description: 'Get a free subdomain: yourname.devlink.app',
      icon: Globe,
      color: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Export Your Portfolio</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {exportOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id as any)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    selectedOption === option.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <Icon className="w-5 h-5 mr-2 text-gray-600" />
                    <span className="font-semibold text-gray-900">{option.title}</span>
                  </div>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </button>
              );
            })}
          </div>

          {selectedOption === 'zip' && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Download Instructions</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>1. Click download to get your React project</li>
                <li>2. Extract the ZIP file</li>
                <li>3. Run `npm install` to install dependencies</li>
                <li>4. Run `npm run dev` to start development server</li>
                <li>5. Run `npm run build` to build for production</li>
              </ul>
            </div>
          )}

          {selectedOption === 'github' && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">GitHub Pages Deployment</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>1. Connect your GitHub account</li>
                <li>2. Choose repository name</li>
                <li>3. Automatic deployment setup</li>
                <li>4. Your portfolio will be live at username.github.io/repo-name</li>
              </ul>
            </div>
          )}

          {selectedOption === 'vercel' && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Vercel Deployment</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>1. Connect your Vercel account</li>
                <li>2. Automatic build and deployment</li>
                <li>3. Custom domain support</li>
                <li>4. Global CDN and SSL included</li>
              </ul>
            </div>
          )}

          {selectedOption === 'subdomain' && (
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">DevLink Subdomain</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>1. Choose your subdomain name</li>
                <li>2. Instant deployment</li>
                <li>3. Free SSL certificate</li>
                <li>4. Access at yourname.devlink.app</li>
              </ul>
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Enter subdomain name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Will be available at: yourname.devlink.app</p>
              </div>
            </div>
          )}

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-900">Generated Code Preview</h3>
              <button
                onClick={handleCopyCode}
                className="flex items-center px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
            <pre className="text-xs text-gray-600 bg-white p-3 rounded border overflow-x-auto">
              <code>{generatePortfolioCode(data, theme).substring(0, 200)}...</code>
            </pre>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              className={`px-6 py-2 text-white rounded-lg font-medium transition-colors ${
                exportOptions.find(opt => opt.id === selectedOption)?.color
              }`}
            >
              {selectedOption === 'zip' ? 'Download ZIP' : 
               selectedOption === 'github' ? 'Deploy to GitHub' :
               selectedOption === 'vercel' ? 'Deploy to Vercel' :
               'Create Subdomain'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};