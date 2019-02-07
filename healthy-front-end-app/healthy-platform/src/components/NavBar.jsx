import React from "react";


const NavBar = (props) => {
  const { user, logout, changeActivePage, changeToMain } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav1">
      <div className="navbar-brand" onClick={() => changeToMain()}>HealthyDishes</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

          <li
            className="nav-item active"
            onClick={() => changeActivePage("main")}
          >
            <div className="nav-link ">HOME  </div>
          </li>
          {// if the user is not authenticated
            !user && (
              <React.Fragment>
                <li
                  className="nav-item active"
                  onClick={() => changeActivePage("login")}
                >
                  <div className="nav-link">Login</div>
                </li>
                <li
                  className="nav-item active"
                  onClick={() => changeActivePage("signup")}
                >
                  <div className="nav-link"> Signup</div>
                </li>
              </React.Fragment>
            )}
          {user && (
            <React.Fragment>
              <li className="nav-item active" onClick={() => logout()}>
                <div className="nav-link">Logout </div>
              </li>

              <li>
                <div className="nav-link active " onClick={() => changeActivePage("menuForm")}>Add Meal</div>
              </li>


            </React.Fragment>
          )
            
          }
        </ul>
      </div>
    </nav>
  );
};


export default NavBar;