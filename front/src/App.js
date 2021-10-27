import { Route, Switch } from 'react-router';
import Register from"./Components/Register/Register"
import Login from "./Components/Register/Login";
import PrivateRoute from './Components/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import AddEvent from './Components/Event/AddEvent';
import EditEvent from './Components/Event/EditEvent';
import MainEvent from './Components/Event/MainEvent';
import Booking from './Components/Booking/Booking';
import Home from './Components/Home';
import "./App.css";
import EventsList from './Components/Event/EventsList';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/events" component={EventsList} />
        <Route exact path="/events/:id" component={MainEvent} />
        <PrivateRoute path="/addevent" component={AddEvent} />
        <PrivateRoute path="/editevent/:id" component={EditEvent} />
        <PrivateRoute path="/booking/:id" component={Booking} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
