import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../Redux/actions/auth";
import UserNav from "./UserNav"
import VisNav from "./VisNav";




const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);
  console.log(user.Role)
  return loading ? (
      <h1>loading...</h1>
    ):user&&user.Role==="user"?(<UserNav/>):(<VisNav/>)
}

export default Navbar
