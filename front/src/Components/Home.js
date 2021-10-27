import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import "./Home.css"
import { Link ,useHistory} from 'react-router-dom';
import { logout } from '../Redux/actions/auth';
import { useDispatch } from 'react-redux';

const Home = () => {
  const history=useHistory();
  const dispatch=useDispatch();
  const token = localStorage.getItem("token");

    return (
      <div>
        <div className="head">
          <div className="empty">
            <div className="top-navigation">
              <div className="logo">
                <a href="/">Reservi</a>
              </div>
              <nav>
                <div className="nav-menu">
                  <ul>
                    <li>
                      <a href="/events" className="nav-link">
                        Browse Events
                      </a>
                    </li>
                    <li>
                      <a href="/addevent" className="nav-link">
                        Add an Event
                      </a>
                    </li>
                  </ul>
                </div>

                <form className="search">
                  <div className="search-inputs">
                    <label for="location">
                      <div className="label">Search</div>
                      <input
                        name="location"
                        id="location"
                        placeholder="Look for Events"
                      />
                    </label>
                  </div>

                  <div className="search-button">
                    <button>
                      <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </button>
                  </div>
                </form>
              </nav>

              <div className="cta">
                {token?<div className="Regl" onClick={() => {dispatch(logout());
          history.push("/login");}} >Logout</div>:<div><Link to="/register" className="Regl">SignUp</Link>
                <Link to="/login"className="Regl" >Login</Link></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home
