import {
  FiHome,
  FiBook,
  FiStar,
  FiPhone,
  FiShoppingCart,
  FiLogOut,
  FiKey,
} from 'react-icons/fi';
import { GiChefToque, GiForkKnifeSpoon } from 'react-icons/gi';

const Navbar = () => {

  const navLinks = [
    { name: 'Home', to: '/', icon: <FiHome /> },
    { name: 'Menu', to: '/menu', icon: <FiBook /> },
    { name: 'About', to: '/about', icon: <FiStar /> },
    { name: 'Contact', to: '/contact', icon: <FiPhone /> },
  ];
