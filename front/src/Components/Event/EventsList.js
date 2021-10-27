import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvent } from '../../Redux/actions/event';
import Navbar from '../Navs/Navbar'
import EventCard from './EventCard';
import "./EventsList.css"
const EventsList = () => {
        const dispatch = useDispatch();
const events = useSelector((state) => state.eventReducer.events);

 useEffect(() => {
   dispatch(getAllEvent());
 }, []);


console.log("events",events);
    return (
      <div className="EventsList">
        <Navbar />
        <div className="cont">
          <div className="column">
            {events.map((e)=>(<EventCard event={e} />))}
          </div>
        </div>
      </div>
    );
}

export default EventsList
