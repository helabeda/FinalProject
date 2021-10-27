import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from "react-router";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { editEvent, getEventId } from '../../Redux/actions/event';
import { useEffect } from 'react';
import { useState } from 'react';

const EditEvent = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [event,setEvent]=useState({})
    const events = useSelector((state) => state.eventReducer.event);
    useEffect(() => {
      dispatch(getEventId(id));
    }, [dispatch,id]);

    useEffect(() => {
      if (events) {
        setEvent({ ...events });
      }
    }, [events]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setEvent({...event,[name]: value });
    };
    delete event._id
    const submitEvent = (e) => {
      e.preventDefault();
      // eslint-disable-next-line no-console
      console.log(event);
      dispatch(
        editEvent(id,event,history)
      );
        }
    return (
      <div className="addit">
        <form action="#" onSubmit={submitEvent}>
          <div className="formit">
            <label>
              EVENT NAME
              <em>&#x2a;</em>
            </label>
            <input
              id="customerName"
              required=""
              type="text"
              name="Name"
              value={event.Name || ""}
              onChange={handleChange}
            />
            <label>
              LOCATION
              <em>&#x2a;</em>
            </label>
            <input
              id="customerEmail"
              name="Location"
              required=""
              type="text"
              value={event.Location || ""}
              onChange={handleChange}
            />
            <label>
              Category
              <em>&#x2a;</em>
            </label>
            <input
              id="customerEmail"
              name="Category"
              required=""
              type="text"
              value={event.Category || ""}
              onChange={handleChange}
            />
            <label>PHONE</label>
            <input
              id="customerPhone"
              name="Number"
              type="tel"
              value={event.Number || ""}
              onChange={handleChange}
            />
            <select name="isFree" id="free" value={events.isFree}>
              <option type="boolean" value={false}>
                Free
              </option>
              <option value={true}>price</option>
            </select>

            {/*           
              <label >PRICE</label> 
            <input id="orderNumber" name="orderNumber" type="text" />   */}

            <label>
              Description
              <em>&#x2a;</em>
            </label>
            <textarea
              id="customerNote"
              name="Description"
              required=""
              rows="4"
              value={event.Description || ""}
              onChange={handleChange}
            ></textarea>
            <Link to="/dashboard">
              <button className="closes">CLOSE</button>
            </Link>
            <button className="submitbtn">SUBMIT</button>
          </div>
        </form>
      </div>
    );
}

export default EditEvent
