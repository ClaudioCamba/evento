import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AccountPage from './AccountPage';
import NavigationBar from '../components/NavigationBar';


export default function App () {
  
  return (<>
      <NavigationBar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/account" element={ <AccountPage /> } />
        <Route path="/eventlist" element={ <h1>Event List Page</h1> } />
        <Route path="/event" element={ <h1>Event Page</h1> } />
      </Routes>
  </>)}