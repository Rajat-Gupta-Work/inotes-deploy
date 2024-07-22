import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from '../context/notes/userContext'; // Import UserContext

const Navbar = () => {
  const { user, setUser } = useUser(); // Access user and setUser from context
  let navigate = useNavigate();
  let location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null); // Clear user data from context
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNotes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            {user ? (
              <>
                <span className="navbar-text text-white me-3">
                  Hello, <strong>{user.name}</strong>
                </span>
                <button onClick={handleLogout} className="btn btn-outline-primary mx-2">
                  Logout
                </button>
              </>
            ) : (
              <form className="d-flex" role="search">
                <Link className="btn btn-outline-primary mx-2" to="/login" role="button">
                  Login
                </Link>
                <Link className="btn btn-outline-primary mx-2" to="/signup" role="button">
                  SignUp
                </Link>
              </form>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
