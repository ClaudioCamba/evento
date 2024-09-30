import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SignInUpForm from "../components/SignInUpForm";
import { SignedInUserContext } from '../context/SignedInUser';
import EventForm from '../components/EventForm';

function AccountPage () {
    const { signedInUser, setSignedInUser } = useContext(SignedInUserContext);
    const { state } = useLocation();
    const navigate = useNavigate();

    return (
    <main id="account-page">
        <h1>{signedInUser ? 'Account: '+signedInUser?.user?.email : 'Log in | Register'}</h1>
        { signedInUser ? state ? navigate(`/event/${state.id}`) : <EventForm signedInUser={signedInUser} /> : <SignInUpForm />}
    </main>
    )
}

export default AccountPage;