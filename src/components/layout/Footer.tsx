import { FC } from 'react';
import { content } from '../../data/content';

const Footer: FC = () => {
  const { footer } = content;

  return (
    <footer className="bg-sansan-blue text-white">
      <div className="container-wrapper py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-items-center">
          
          {/* Resources */}
          {footer.resources.map((section, index) => (
            <div key={index} className="md:col-span-4 text-center">
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-300">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white hover:font-semibold transition-all duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Attribution and Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-sm text-gray-400">
            <div className="text-center space-y-2">
              {footer.copyright.attribution.map((text, index) => (
                <p key={index} className="hover:text-gray-300 transition-colors">
                  {text}
                </p>
              ))}
            </div>
            <p className="text-center text-gray-300 mt-6">
              {footer.copyright.statement}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
