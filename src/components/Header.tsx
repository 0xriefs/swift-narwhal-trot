import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

const Header = () => {
  const { session } = useAuth();

  const navLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'Tentang Kami', path: '/tentang-kami' },
    { name: 'Berita', path: '/berita' },
    { name: 'PPDB', path: '/ppdb' },
    { name: 'LMS', path: '/lms-course' },
  ];

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          SMKN 1 Purwakarta
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'bg-gray-900' : 'hover:bg-gray-700'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div>
          {session ? (
            <Link to="/profile" className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700">
              Profil
            </Link>
          ) : (
            <Link to="/login" className="px-4 py-2 rounded-md text-sm font-medium bg-green-600 hover:bg-green-700">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;