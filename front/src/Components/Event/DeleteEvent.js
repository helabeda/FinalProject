import React from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserId } from "../../Redux/actions/user";
import { useEffect } from "react";
import { useState } from "react";
const DeleteEvent = ({event}) => {

  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const users = useSelector((state) => state.useroptReducer.user);
  const id=event.user
  useEffect(() => {
    dispatch(getUserId(id));
  }, [dispatch,id]);

  useEffect(() => {
    if (users) {
      setUser({ ...users });
    }
  }, [users]);
    console.log(id);
  const handleClick=(e)=>{
  
  }
  //jarreb bl current user fl auth
    return (
        <div>
            <button onClick={handleClick}>{user}</button>
        </div>
    )
}

export default DeleteEvent
