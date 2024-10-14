import { useState, useEffect, useContext } from 'react';
import { SignedInUserContext } from '../context/SignedInUser';
import { useLocation, useNavigate } from 'react-router-dom';
import SignInUpForm from "../components/SignInUpForm";
import EventForm from '../components/EventForm';
import PageBanner from '../components/PageBanner';

function AccountPage () {
    const { signedInUser } = useContext(SignedInUserContext);
    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <main id="account-page">
            { signedInUser ? <h1>{'Account: '+signedInUser?.user?.email}</h1> : <h1>{'Login | Register'}</h1> }
            { signedInUser ? state ? navigate(`/event/${state.id}`) : <EventForm signedInUser={signedInUser} /> : <SignInUpForm /> }
        </main>
    )
}

export default AccountPage;