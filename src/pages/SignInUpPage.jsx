import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SignInUpForm from "../components/SignInUpForm";
import { SignedInUserContext } from '../context/SignedInUser';
import EventForm from '../components/EventForm';
import PageBanner from '../components/PageBanner';
import SignInUpTabs from '../components/SignInUpTabs';

function SignInUpPage () {
    const { signedInUser, setSignedInUser } = useContext(SignedInUserContext);
    const { pathname } = useLocation();

    return (
        <main id="sign-inout-page">
            <SignInUpTabs type={pathname.split('/')[1]} />
        </main>
    )
}

export default SignInUpPage;