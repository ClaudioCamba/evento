import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css'
import { Routes, Route } from 'react-router-dom';
import { SignedInUserProvider } from '../context/SignedInUser';
import NavigationBar from '../components/NavigationBar';
import HomePage from './HomePage';
import SignInUpPage from './SignInUpPage';


export default function App () {
  return (
  <SignedInUserProvider>
      <NavigationBar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/login" element={ <SignInUpPage /> } />
        <Route path="/account" element={ <SignInUpPage /> } />
        <Route path="/eventlist" element={ <h1>Event List Page</h1> } />
        <Route path="/event" element={ <h1>Event Page</h1> } />
      </Routes>
  </SignedInUserProvider>
)}