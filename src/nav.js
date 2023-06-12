import React from 'react';
import {Link} from 'react-router-dom';

const Nav=()=>{
    return(
        <div>
          <ul className='navbar'>
            <li className='elem'><Link to="/add">Add Trips</Link></li>
            <li className='elem'><Link to="/see">See Trips</Link></li>
          </ul>
        </div>
    )
}

export default Nav;