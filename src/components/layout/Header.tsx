import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm h-28 sm:h-16">
      <div className="container-wrapper h-full">
        <nav className="flex items-center justify-between h-full">
          {/* Logo/Brand with red underline */}
          <div className="flex-shrink-0 relative">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-bold text-sansan-blue"
            >
              Empowering Sansan
            </button>
            <span
              className="absolute left-[5%] block h-[5px] w-[90px] 
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
