import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <NavLink className="navbar-brand" to="/">
          ReduxExample
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink className="nav-link" to="/">
                Anasayfa
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/about">
                Hakkımızda
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/contact">
                Bize Ulaşın
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
