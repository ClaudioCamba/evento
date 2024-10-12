import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SignInUpForm from "../components/SignInUpForm";
import { SignedInUserContext } from '../context/SignedInUser';
import EventForm from '../components/EventForm';
import PageBanner from '../components/PageBanner';
import { useParams } from 'react-router-dom';
import SignInForm from '../components/SignInForm';

function SignInPage () {
    const { signedInUser, setSignedInUser } = useContext(SignedInUserContext);
    const  { type } = useParams();
    // const { state } = useLocation();
    // const navigate = useNavigate();
    const [ view, setView ] = useState(type);



    console.log(view)

    return (
    <main id="register-page">
        <h1>Sign In</h1>
        <SignInForm type={type} />
    </main>
    )
}

export default SignInPage;