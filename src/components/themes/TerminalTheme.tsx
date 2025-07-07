import React from 'react';
import { PortfolioData } from '../../types';
import { Terminal, Folder, FileText, User, Code, Github, ExternalLink, Calendar } from 'lucide-react';

interface TerminalThemeProps {
  data: PortfolioData;
}

export const TerminalTheme: React.FC<TerminalThemeProps> = ({ data }) => {
  const [currentPath, setCurrentPath] = React.useState('~');
  
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <Github className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-black text-green-400 min-h-screen font-mono">
      {/* Terminal Header */}
      <div className="bg-gray-900 px-4 py-2 flex items-center border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 text-sm text-gray-400">
          <Terminal className="w-4 h-4 inline mr-2" />
          {data.personalInfo.name.toLowerCase().replace(' ', '')}@devlink
        </div>
      </div>

      <div className="p-6">
        {/* Welcome Message */}
        <div className="mb-8">
          <div className="text-green-400 mb-2">
            <span className="text-blue-400">$</span> whoami
          </div>
          <div className="ml-4 mb-4">
            <div className="text-white text-xl font-bold">{data.personalInfo.name}</div>
            <div className="text-yellow-400">{data.personalInfo.title}</div>
          </div>

          <div className="text-green-400 mb-2">
            <span className="text-blue-400">$</span> cat about.txt
          </div>
          <div className="ml-4 mb-4 text-gray-300 leading-relaxed">
            {data.personalInfo.bio}
          </div>

          <div className="text-green-400 mb-2">
            <span className="text-blue-400">$</span> contact --info
          </div>
          <div className="ml-4 mb-4">
            <div className="text-cyan-400">📧 {data.personalInfo.email}</div>
            {data.personalInfo.phone && (
              <div className="text-cyan-400">📞 {data.personalInfo.phone}</div>
            )}
            {data.personalInfo.location && (
              <div className="text-cyan-400">📍 {data.personalInfo.location}</div>
            )}
          </div>
        </div>

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-8">
            <div className="text-green-400 mb-2">
              <span className="text-blue-400">$</span> ls -la skills/
            </div>
            <div className="ml-4 grid grid-cols-2 md:grid-cols-4 gap-2">
              {data.skills.map((skill, index) => (
                <div key={index} className="text-yellow-400 flex items-center">
                  <FileText className="w-3 h-3 mr-2" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <div className="mb-8">
            <div className="text-green-400 mb-2">
              <span className="text-blue-400">$</span> ls -la projects/
            </div>
            <div className="ml-4 space-y-4">
              {data.projects.map((project) => (
                <div key={project.id} className="border border-gray-700 rounded-lg p-4 bg-gray-900">
                  <div className="flex items-center mb-2">
                    <Folder className="w-4 h-4 mr-2 text-blue-400" />
                    <span className="text-white font-bold">{project.title}</span>
                  </div>
                  <div className="text-gray-300 mb-2">{project.description}</div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-green-900 text-green-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        ./run
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 flex items-center"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        ./code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Blog Posts */}
        {data.blogs.length > 0 && (
          <div className="mb-8">
            <div className="text-green-400 mb-2">
              <span className="text-blue-400">$</span> ls -la blog/
            </div>
            <div className="ml-4 space-y-3">
              {data.blogs.map((blog) => (
                <div key={blog.id} className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <FileText className="w-4 h-4 mr-2 text-yellow-400" />
                      <span className="text-white font-bold">{blog.title}</span>
                    </div>
                    <div className="text-gray-300 text-sm ml-6">{blog.description}</div>
                    <div className="text-gray-500 text-xs ml-6 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(blog.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 ml-4"
                  >
                    ./read
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Social Links */}
        <div className="mb-8">
          <div className="text-green-400 mb-2">
            <span className="text-blue-400">$</span> ls -la social/
          </div>
          <div className="ml-4 space-y-1">
            {data.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-cyan-400 hover:text-cyan-300"
              >
                {getSocialIcon(social.platform)}
                <span className="ml-2">{social.platform.toLowerCase()}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Command Prompt */}
        <div className="mt-8 pt-4 border-t border-gray-700">
          <div className="flex items-center">
            <span className="text-green-400">{data.personalInfo.name.toLowerCase().replace(' ', '')}@devlink</span>
            <span className="text-white mx-1">:</span>
            <span className="text-blue-400">{currentPath}</span>
            <span className="text-white ml-1">$</span>
            <span className="ml-2 bg-green-400 w-2 h-5 animate-pulse"></span>
          </div>
        </div>
      </div>
    </div>
  );
};