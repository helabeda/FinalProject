import React from 'react'
import { useDispatch } from "react-redux";
import {  useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  getEventId } from "../../Redux/actions/event";
import { useEffect } from "react";
import { useState } from "react";
import"./MainEvent.css"


const MainEvent = () => {
        const { id } = useParams();
        const dispatch = useDispatch();
        const [event, setEvent] = useState({});
        const events = useSelector((state) => state.eventReducer.event);
        useEffect(() => {
          dispatch(getEventId(id));
        }, [dispatch,id]);

        useEffect(() => {
          if (events) {
            setEvent({ ...events });
          }
        }, [events]);
        console.log(event.Price)
    return (
      <div className="main-event">
        <div id="wrapper">
          <div id="left-side">
            <ul>
              <li className="choose active">Price: {event.Price}DT</li>
              <li className="pay">Location: {event.Location}</li>
              <li className="wrap">{event.Category}</li>
              <li className="ship">(+216){event.Number}</li>
              <li className="booking">
                <Link to={`/booking/${event._id}`}>
                  <button>BOOKING</button>
                </Link>
              </li>
            </ul>
          </div>

          <div id="border">
            <div id="line" className="one"></div>
          </div>
          <div id="right-side">
            <div id="first" className="active">
              <h1>{event.Name}</h1>
              <img src={event.Image} alt={event.Name} className="event-img" />
              <p>{event.Description}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MainEvent
