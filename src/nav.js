import React from 'react';
import {Link} from 'react-router-dom';

const Nav=()=>{
    return(
        <div>
          <ul className='navbar'>
            <li><Link to="/add">Add Products</Link></li>
            <li><Link to="/see">See Products</Link></li>
          </ul>
        </div>
    )
}

export default Nav;