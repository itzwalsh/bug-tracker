import React, { useState } from "react";
import { auth } from "../firebase";

import "./Navbar.css";

import { IoSettings as DropDownSettings } from "react-icons/io5";
import { MdLogin as DropDownLogin } from "react-icons/md";
import { MdLogout as DropDownLogout } from "react-icons/md";

import {
  signInWithRedirect,
  signOut,
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

function DropdownMenu() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      setIsLoggedIn(true);
      setCurrentUser(user);
    } else {
      // User is signed out
      setIsLoggedIn(false);
    }
  });

  function handleClick() {
    return !isLoggedIn ? signInWithRedirect(auth, provider) : signOut(auth);
  }

  return (
    <div className="dropdown">
      {isLoggedIn ? (
        //IF USER IS LOGGED IN RENDER THISq
        <a href="#">
          <span className="profile-picture">
            {currentUser && (
              <img className="userpic" src={currentUser.photoURL} alt="User" />
            )}
          </span>
          {currentUser && (
            <p className="user-name" alt="Username">
              {currentUser.displayName}
            </p>
          )}
        </a>
      ) : (
        //OTHERWISE, NO USER LOGGED IN, RENDER THIS.
        <a href="#">
          <span className="profile-picture">
            <img src="default.png" className="userpic" alt="User" />
          </span>
          <p className="user-name" alt="Username">
            Press below to Login.
          </p>
        </a>
      )}

      {/* THIS IS THE LOGIN/LOGOUT RENDERING SECTION */}
      {isLoggedIn ? (
        //IF USER IS LOGGED IN RENDER THISq
        <a href="#" className="user-utility-buttons">
          <span className="dropdown-icon-button">
            <DropDownSettings />
          </span>

          <span className="dropdown-icon-button" onClick={handleClick}>
            <DropDownLogout />
          </span>
        </a>
      ) : (
        //OTHERWISE, NO USER LOGGED IN, RENDER THIS.
        <a href="#" className="user-utility-buttons">
          <span className="dropdown-icon-button">
            <DropDownSettings />
          </span>

          <span className="dropdown-icon-button" onClick={handleClick}>
            <DropDownLogin />
          </span>
        </a>
      )}
    </div>
  );
}

export default DropdownMenu;
