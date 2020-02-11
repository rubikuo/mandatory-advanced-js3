import React from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaUserAlt, FaUnlock, FaPen } from "react-icons/fa";
import { IconContext } from "react-icons";
import jwt from "jsonwebtoken";
import styles from "./Header.module.css";
import { CSSTransition } from "react-transition-group";

const Header = ({ page, logOut, token }) => {
  let email;
  if (token) {
    let decoded = jwt.decode(token);
    email = decoded.email;
  }

  let content;

  if (token === null) {
    content = (
      <Link to="/" className={`${styles.links} ${styles.logo}`}>
        iToDo
      </Link>
    );
  }

  if (page === "register" || page === "logIn") {
    content = (
      <>
        <Link to="/" className={`${styles.links} ${styles.logo}`}>
          iToDo
        </Link>
        <div className={styles.linksCtn}>
          <Link className={styles.links} to="/login">
            <FaUnlock /> Log in
          </Link>
          <Link className={styles.links} to="/register">
            <FaPen /> Register
          </Link>
        </div>
      </>
    );
  }

  if (token) {
    content = (
      <>
        <Link to="/" className={`${styles.links} ${styles.logo}`}>
          iToDo
        </Link>

        <div className={styles.linksCtn}>
          <span style={{ color: "white", margin: "0 10px" }}>

            <FaUserAlt className="userIcon" />
    

            {email}
          </span>
          <Link
            to="/"
            onClick={logOut}
            className={`${styles.logOutBtn} ${styles.links}`}
          >
            <FaSignOutAlt /> Log out
          </Link>
        </div>
      </>
    );
  }

  return <nav className={styles.header}>{content}</nav>;
};

let HeaderMemo = React.memo(Header);

export default HeaderMemo;
