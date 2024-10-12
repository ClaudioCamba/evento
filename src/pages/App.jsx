import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css'
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { SignedInUserContext } from '../context/SignedInUser';
import { useNavigate, Navigate } from 'react-router-dom';
import Homepage from './Home';
import AccountPage from './AccountPage';
import NavigationBar from '../components/NavigationBar';
import EventPage from './EventPage';
import EventListPage from './EventsListPage';
import SignInUpPage from './SignInUpPage';

export default function App () {
  const { signedInUser, setSignedInUser } = useContext(SignedInUserContext);
  const navigate = useNavigate();
  console.log(signedInUser)
  return (<>
      <NavigationBar />
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/account" element={ signedInUser ? <AccountPage /> : <Navigate to="/sign_in" /> } />
        <Route path="/sign_in" element={ signedInUser ? <Navigate to="/account" /> : <SignInUpPage type={'sign_in'} /> } />
        <Route path="/sign_up" element={ signedInUser ? <Navigate to="/account" /> : <SignInUpPage type={'sign_up'} /> } />
        <Route path="/event/:id" element={ <EventPage /> } />
        <Route path="/*" element={ <h1>We cannot find the page you're looking for</h1> } />
      </Routes>
  </>)}