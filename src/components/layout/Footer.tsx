import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-sansan-blue text-white">
      <div className="container-wrapper py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Empowering Sansan</h3>
            <p className="text-gray-300">
              企業の可能性を広げるデジタルトランスフォーメーションを支援
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">クイックリンク</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-white">
                  ホーム
                </a>
              </li>
              <li>
                <a href="#achievements" className="text-gray-300 hover:text-white">
                  実績
                </a>
              </li>
              <li>
                <a href="#challenges" className="text-gray-300 hover:text-white">
                  課題と解決策
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white">
                  自己紹介
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: contact@example.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-white">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© 2024 Empowering Sansan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
