import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import "./Navbar.css";
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Developers</Link>
      </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user'></i>{" "}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link onClick={logout} to='/login'>
          <i className='fas fa-sign-out-alt'></i>{" "}
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>
          {" "}
          <i class='fas fa-users'></i>Developers
        </Link>
      </li>
      <li>
        <Link to='/register'>
          <i class='fas fa-user-plus'></i>Register
        </Link>
      </li>
      <li>
        <Link to='/login'>
          <i class='fas fa-sign-in-alt'></i>Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> DevConnector
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
