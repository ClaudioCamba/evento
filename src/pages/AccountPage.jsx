import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SignInUpForm from "../components/SignInUpForm";
import { SignedInUserContext } from '../context/SignedInUser';
import EventForm from '../components/EventForm';
import PageBanner from '../components/PageBanner';

function AccountPage () {
    const { signedInUser, setSignedInUser } = useContext(SignedInUserContext);
    const { state } = useLocation();
    const navigate = useNavigate();

    return (
    <main id="account-page">
        { signedInUser ? <PageBanner title={'Account: '+signedInUser?.user?.email}/> : <PageBanner title={'Login | Register'}/> }
        { signedInUser ? state ? navigate(`/event/${state.id}`) : <EventForm signedInUser={signedInUser} /> : <SignInUpForm /> }
    </main>
    )
}

export default AccountPage;