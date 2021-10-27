import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getBooked, getBookedById} from "../../Redux/actions/booking";
import OwnerCard from "./OwnerCard";
import "./List.css"

import { useHistory} from "react-router-dom";

const Owner = () => {
  const history=useHistory()
  const dispatch = useDispatch();
  const bookeds = useSelector((state) => state.bookingReducer.booked);
  const bookedsId = useSelector((state) => state.bookingReducer.bookedid);

  useEffect(() => {
    dispatch(getBooked());
  }, [dispatch]);

   const [bookId, setBookId] = useState("")
  //  useEffect(() => {
  //    dispatch(getBooked());
  //  }, [dispatch]);
   
   console.log("id", bookId);
  
  useEffect(() => {
    dispatch(getBookedById(bookId));
  }, [dispatch, bookId]);

  // useEffect(() => {
  //   if (bookings) {
  //     setBooksHis({ ...bookings });
  //   }
  // }, [bookings]);
  console.log("hathiiiiiiii", bookeds);

   const [open, setOpen] = useState("")
   const handleCLick = (e) => {
      
     e.preventDefault();
     if(open.length<0){ setOpen("open")}
     else{ setOpen ("") }
    history.push("/dashboard/booked")
   };

  return (
    <div className={`List ${open}`}>
      <h1>Customers List</h1>
      <main>
        <table>
          <thead>
            <tr>
              <th>Provider Name</th>
              <th>E-mail</th>
              <th></th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th colspan="3">Year: 2014</th>
            </tr>
          </tfoot>
          <tbody>
            {bookeds.map((e) => (
              <OwnerCard
                Owner={e}
                setOpen={setOpen}
                open={open}
                setBookId={setBookId}
              />
            ))}
          </tbody>
        </table>

        <div className={`detail ${open}`}>
          <div className="detail-container">
            <dl>
              <dt>Provider Name</dt>
              <dd>{bookedsId.First_name}</dd>
              <dt>E-mail</dt>
              <dd>email@example.com</dd>
              <dt>City</dt>
              <dd>Detroit</dd>
              <dt>Phone-Number</dt>
              <dd>555-555-5555</dd>
              <dt>Last Update</dt>
              <dd>Jun 20 2014</dd>
              <dt>Notes</dt>
              <dd>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede.
              </dd>
            </dl>
          </div>

          <div className="detail-nav">
            <button className="close" onClick={handleCLick}>
              Close
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Owner;
