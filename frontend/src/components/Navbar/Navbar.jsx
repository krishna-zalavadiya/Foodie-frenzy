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
    { name: 'Home', href: '/', icon: <FiHome /> },
    { name: 'Menu', href: '/menu', icon: <FiBook /> },
    { name: 'About', href: '/about', icon: <FiStar /> },
    { name: 'Contact', href: '/contact', icon: <FiPhone /> },
  ];