import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = props => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">
          MarioPlan
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = ({ firebase }) => {
  return {
    auth: firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
