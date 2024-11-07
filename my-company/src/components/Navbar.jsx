import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul style={{
        listStyle :'none', 
        display:'flex', 
        alignItems:'center',
        justifyContent : 'space-between',
        padding: '10px',
        textTransform:'uppercase',
        fontWeight:'bold'
        }}>
        <li><Link to="/Home"  style={{ 
            textDecoration: 'none',
            color:'black'
         }}>Home</Link></li>
        <li><Link to="/About"  style={{ 
            textDecoration: 'none',
            color:'black'
         }}>About</Link></li>
        <li><Link to="/Services"  style={{ 
            textDecoration: 'none',
            color:'black'
         }}>Services</Link></li>
        <li><Link to="/Contact"  style={{ 
            textDecoration: 'none',
            color:'black'
         }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;