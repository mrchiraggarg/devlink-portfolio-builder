import React from 'react';
import { PortfolioData } from '../../types';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, ExternalLink, Calendar } from 'lucide-react';

interface MinimalThemeProps {
  data: PortfolioData;
}

export const MinimalTheme: React.FC<MinimalThemeProps> = ({ data }) => {
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'twitter':
        return <Twitter className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <header className="py-20 px-6 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <img
              src={data.personalInfo.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(data.personalInfo.name)}&size=200&background=f0f0f0&color=333`}
              alt={data.personalInfo.name}
              className="w-16 h-16 rounded-full mr-6 object-cover"
            />
            <div>
              <h1 className="text-4xl font-light text-gray-900 mb-2">
                {data.personalInfo.name}
              </h1>
              <p className="text-lg text-gray-600">{data.personalInfo.title}</p>
            </div>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-8 font-light">
            {data.personalInfo.bio}
          </p>
          
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              {data.personalInfo.email}
            </div>
            {data.personalInfo.phone && (
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                {data.personalInfo.phone}
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {data.personalInfo.location}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Skills */}
        {data.skills.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-light text-gray-900 mb-8">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-light text-gray-900 mb-8">Projects</h2>
            <div className="space-y-8">
              {data.projects.map((project) => (
                <div key={project.id} className="border-b border-gray-200 pb-8 last:border-b-0">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-medium text-gray-900">{project.title}</h3>
                    <div className="flex space-x-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 font-light">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Blog Posts */}
        {data.blogs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-light text-gray-900 mb-8">Writing</h2>
            <div className="space-y-6">
              {data.blogs.map((blog) => (
                <div key={blog.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{blog.title}</h3>
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-gray-700 mb-2 font-light">{blog.description}</p>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(blog.publishedAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Social Links */}
        <section>
          <h2 className="text-2xl font-light text-gray-900 mb-8">Connect</h2>
          <div className="flex space-x-6">
            {data.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                {getSocialIcon(social.platform)}
                <span className="ml-2">{social.platform}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6 text-center text-gray-500 text-sm">
        <p>© 2024 {data.personalInfo.name}</p>
      </footer>
    </div>
  );
};