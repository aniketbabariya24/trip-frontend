import React from 'react';
import {Link} from 'react-router-dom';

const Nav=()=>{
    return(
        <div>
          <ul className='navbar'>
            <li><Link to="/add">Add Trips</Link></li>
            <li><Link to="/see">See Trips</Link></li>
          </ul>
        </div>
    )
}

export default Nav;