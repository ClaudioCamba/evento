import { useState, useEffect, useContext } from 'react';
import SignInUpForm from "../components/SignInUpForm";
import { SignedInUserContext } from '../context/SignedInUser';
import EventForm from '../components/EventForm';

function AccountPage () {
    const { signedInUser, setSignedInUser } = useContext(SignedInUserContext);
    return (
    <main id="signinup-page">
        <h1>{signedInUser ? 'Account: '+signedInUser?.user?.email : 'Log in | Register'}</h1>
        { signedInUser ? <EventForm signedInUser={signedInUser} /> : null}
        <SignInUpForm />
        <button onClick={()=>{
      console.log(signedInUser)
  }}>User Details</button>
    </main>
    )
}

export default AccountPage;