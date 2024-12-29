import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm h-16">
      <div className="container-wrapper h-full">
        <nav className="flex items-center justify-between h-full">
          {/* Logo/Brand with red underline */}
          <div className="flex-shrink-0 relative">
            <a href="#" className="text-xl font-bold text-sansan-blue">
              Empowering Sansan
            </a>
            <span 
              className="absolute left-[5%] block h-[3px] w-[80px] 
                       bg-sansan-red mt-2"
              aria-hidden="true"
            />
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;
