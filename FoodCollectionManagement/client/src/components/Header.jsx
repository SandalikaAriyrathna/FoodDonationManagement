import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header({ isActive }) {
  return (
    <>
      <section
        className="navbar navbar-expand-lg navbar-light"
        style={{ height: '150px', backgroundColor: '#FFBF00' }}
      >
        <div className="container-fluid">
          <img
            src="https://w7.pngwing.com/pngs/867/115/png-transparent-multicolored-five-holding-hands-illustration-self-help-group-business-logo-service-project-business-company-people-advertising.png"
            height="100"
            alt="logo"
            loading="lazy"
          />
          <div class="d-flex flex-column justify-content-center align-items-center">
            <h1 class="fw-bold text-light mb-4">Saubhagya</h1>
            <h5 class="fw-bold text-light">
              <i>"Food for Everyone"</i>
            </h5>
          </div>

          <div className="d-flex align-items-center">
            <div className="dropdown">
              <Link
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                to="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="70"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </Link>
              <p className="ms-2">Admin</p>

              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <Link className="dropdown-item" to="/user-profile">
                    My profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ height: '60px', backgroundColor: '#93C572' }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <NavLink
                  exact
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link text-light'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link text-light'
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link text-light'
                  }
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item me-2">
                <NavLink
                  to="/food"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link text-light'
                  }
                >
                  Available Food List
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink
                  to="/donate"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link text-light'
                  }
                >
                  Donate Food
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink
                  to="/orphanage"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link text-light'
                  }
                >
                  Orphanage
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink
                  to="/foodCollectingDetails"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link text-light'
                  }
                >
                  Food Collection
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink
                  to="/grocery"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link text-light'
                  }
                >
                  Donate Grocery
                </NavLink>
              </li>
            </ul>
          </div>

          <form className="d-flex input-group w-auto me-4">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </form>

          <div className="d-flex align-items-center">
            <div className="dropdown">
              <Link
                className="text-reset me-4 dropdown-toggle hidden-arrow"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
