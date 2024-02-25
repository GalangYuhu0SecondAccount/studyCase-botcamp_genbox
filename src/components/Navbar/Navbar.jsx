import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        {/* <main>
            <Outlet />
        </main> */}
      <ul>
        <li>
          <Link to="/login">Login</Link> <br />
        </li>
        <li>
          {" "}
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
