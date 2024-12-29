import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container-wrapper">
        <nav className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-sansan-blue">
              Empowering Sansan
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#hero" className="text-gray-600 hover:text-sansan-blue">
                  ホーム
                </a>
              </li>
              <li>
                <a href="#achievements" className="text-gray-600 hover:text-sansan-blue">
                  実績
                </a>
              </li>
              <li>
                <a href="#challenges" className="text-gray-600 hover:text-sansan-blue">
                  課題と解決策
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-sansan-blue">
                  自己紹介
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
