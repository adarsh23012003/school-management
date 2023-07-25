import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div>
        <nav className='p-2 bg-blue-400'>
          <ul className='flex gap-2 font-serif justify-center'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/student'>Student</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
