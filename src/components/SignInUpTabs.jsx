import { useState } from 'react';
import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SignInUpForm from './SignInUpForm';

function SignInUpTabs({type}) {
  return (<>
    <Link to="/sign_in">(Sign In)</Link>
    <Link to="/sign_up">(Sign Up)</Link>
    <SignInUpForm type={type}/>
  </>);
}

export default SignInUpTabs;