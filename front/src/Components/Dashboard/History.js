import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getHistory, getHistoryById } from '../../Redux/actions/booking';
import HistoryCard from './HistoryCard';
import { useHistory } from 'react-router';

const History = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state.bookingReducer.history);
    useEffect( () => {
      dispatch(getHistory());
    }, [dispatch]);

    const [historyId, setHistoryId] = useState("");
    //  useEffect(() => {
    //    dispatch(getBooked());
    //  }, [dispatch]);

    console.log("id", historyId);

    useEffect(() => {
      dispatch(getHistoryById(historyId));
    }, [dispatch, historyId]);

    const [open, setOpen] = useState("");
    const handleCLick = (e) => {
      e.preventDefault();
      if (open.length < 0) {
        setOpen("open");
      } else {
        setOpen("");
      }
      history.push("/dashboard/history");
    };
    console.log("hathiiiiiiii",bookings)
    return (
      <div className="List">
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
            <tfoot></tfoot>
            <tbody>
              {bookings.map((e) => (
                <HistoryCard
                  history={e}
                  setHistoryId={setHistoryId}
                  setOpen={setOpen}
                  open={open}
                />
              ))}
            </tbody>
          </table>
          <div className={`detail ${open}`}>
            <div className="detail-container">
              <dl>
                <dt>Provider Name</dt>
                <dd>John Doe</dd>
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
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede.
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
}
export default History
