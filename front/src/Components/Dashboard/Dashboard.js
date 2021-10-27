import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserNav from "../Navs/UserNav"
import { currentUser } from '../../Redux/actions/auth';
import PrivateRoute from '../PrivateRoute';
import History from './History';
import Owner from './Owner';

const Dashboard = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(currentUser());
    }, [dispatch]);
    const user = useSelector((state) => state.userReducer.user);
    const loading = useSelector((state) => state.userReducer.loading);

    return loading ? (
      <h1>loading...</h1>
    ) : (
      <div>
        <UserNav />
        <h1 style={{margin:"85px"}}>Welcome {user && user.Last_name}</h1>
        <PrivateRoute path="/dashboard/history" component={History} />
        <PrivateRoute path="/dashboard/booked" component={Owner} />
      </div>
    );
}

export default Dashboard
