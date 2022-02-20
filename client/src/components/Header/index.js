import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import img from '../images/reading.jpg';

const styles = {
  hederBox: {
    margin: 20,
  }
}

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (

    <header className="bg-primary text-light mb-4 flex-row justify-center">

      <div style={styles.hederBox} className="hederBox flex-row justify-center col-md-2">

        <img src={img} className="img" alt="img" />

      </div>

      <div style={styles.hederBox} className="flex-row col-md-2 ">

        <h1 className=" m-0">Book club</h1>
        <p >I am glad you are here at bookClub. I created this platform that gives readers easy acces to the things they love. moreover, maybe they will share their own stories.</p>
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>

            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>

    </header >

  );
};

export default Header;
