import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css'
import { Routes, Route } from 'react-router-dom';
import Homepage from './Home';
import AccountPage from './AccountPage';
import NavigationBar from '../components/NavigationBar';
import EventPage from './EventPage';
import EventListPage from './EventsListPage';

export default function App () {
  
  return (<>
      <NavigationBar />
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/account" element={ <AccountPage /> } />
        {/* <Route path="/eventlist" element={ <EventListPage /> } /> */}
        <Route path="/event/:id" element={ <EventPage /> } />
        <Route path="/*" element={ <h1>We cannot find the page you're looking for</h1> } />
      </Routes>
  </>)}