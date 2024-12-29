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

          {/* Contact Info */}
          <div className="md:col-span-3 text-center">
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-2 text-gray-300">
              <p>{footer.contact.email}</p>
              <div className="flex justify-center space-x-4 mt-4">
                {footer.contact.social.map((item, index) => (
                  <a 
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:font-semibold transition-all duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Attribution and Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-sm text-gray-400 space-y-2">
            {footer.copyright.attribution.map((text, index) => (
              <p key={index} className="text-center">{text}</p>
            ))}
            <p className="text-center text-gray-300 mt-4">
              {footer.copyright.statement}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
