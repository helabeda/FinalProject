import "./Booking.css"
import Style from "style-it";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getEventId } from "../../Redux/actions/event";
import { bookEvent } from "../../Redux/actions/booking";


const Booking = () => {
    
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
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
        const handleChange = (e) => {
          const { name, value } = e.target;
          setEvent({ ...event, [name]: value });
        };
        delete event._id;
        const submitEvent = (e) => {
          e.preventDefault();
          // eslint-disable-next-line no-console
          console.log(event);
          dispatch(bookEvent(id, event, history));
        };
    return (
      <div className="Bookingdiv">
        <Style>
          {`.card-container{
    display: grid;
    grid-template-columns: 420px 420px;
}
.card-img{
    background: url("${event.Image}") center/cover no-repeat;
}`}
        </Style>
        <div class="banner">
          <h2>BOOK YOUR PLACE NOW</h2>
          <div class="card-container">
            <div class="card-img"></div>

            <div class="card-content">
              <h3>Reservation</h3>
              <form onSubmit={submitEvent}>
                <div class="form-row">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="First_name"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="Last_name"
                    onChange={handleChange}
                  />
                </div>

                <div class="form-row">
                  <input
                    type="text"
                    placeholder="Email"
                    name="Email"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="Tel_Number"
                    onChange={handleChange}
                  />
                </div>

                <div class="form-row">
                  <input
                    type="number"
                    placeholder="How Many Persons?"
                    min="1"
                    name="Person"
                    onChange={handleChange}
                  />
                  <input type="submit" value="BOOK " />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Booking
