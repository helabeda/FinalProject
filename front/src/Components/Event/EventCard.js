import React from 'react'
import "./EventsList.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock, faComment} from "@fortawesome/free-solid-svg-icons";
const EventCard = ({event}) => {

    return (
      <div className="post-module">
        <div className="thumbnail">
          <div className="date">
            <div className="day">27</div>
            <div className="month">Mar</div>
          </div>
          <img src={event.Image} alt="card" />
        </div>
        <div className="post-content">
          <div className="category">{event.Price}DT</div>
          <h1 className="title">{event.Name}</h1>
          <h2 className="sub_title">
            {" "}
            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>{" "}
            {event.Location}{" "}
          </h2>

          <div className="post-meta">
            <span className="timestamp">
              <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> 6 mins ago
            </span>
            <span className="comments">
              <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
              <a href="#"> 39 comments</a>
            </span>
          </div>
        </div>
      </div>
    );
}

export default EventCard
