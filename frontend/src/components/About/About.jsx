import React, { useState } from 'react';
import { FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { features, stats, teamMembers } from '../../assets/dummydata';

const About = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    animate = {{
      background: [
        'linear-gradient(45deg, #3c2a21 0%, #1a120b 50%, #3c2a21 100%)',
        'linear-gradient(45deg, #3c2a21 0%, #1a120b 80%, #3c2a21 100%)',
        'linear-gradient(45deg, #3c2a21 0%, #1a120b 50%, #3c2a21 100%)'
      ]
  }
} transition = {{ duration: 6, repeat: Infinity }} />


{
  Object.entries(m.social).map(([p, url]) => (
    <a key={p} href={url} target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400 transition-colors duration-300 hover:scale-110">
      {({ twitter: <FaXTwitter className="w-6 h-6" />, instagram: <FaInstagram className="w-6 h-6" />, facebook: <FaFacebookF className="w-6 h-6" />, linkedin: <FaLinkedinIn className="w-6 h-6" /> })[p]}
    </a>
  ))
}
