import { FC } from 'react';
import { content } from '../../data/content';
import { GitHubIcon } from '../../assets/icons/github';

const Footer: FC = () => {
  const { footer } = content;

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'github':
        return <GitHubIcon />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-sansan-blue text-white">
      <div className="container-wrapper py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 justify-items-center">
          {footer.resources.map((section, index) => (
            <div key={index} className="md:col-span-4 text-center">
              <h4 className="text-base font-semibold mb-3">{section.title}</h4>
              <ul className="space-y-1.5 text-gray-300 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.url !== '#' ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white hover:font-semibold duration-300 
                                 inline-flex items-center gap-2"
                      >
                        {getIcon(link.icon)}
                        {link.name}
                      </a>
                    ) : (
                      <span className="text-gray-400">{link.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
