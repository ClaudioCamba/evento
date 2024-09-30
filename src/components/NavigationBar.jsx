import { useState, useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SignedInUserContext } from '../context/SignedInUser';
import { Link } from "react-router-dom";
import signOutAcc from '../utils/signOutAcc';
import supabase from '../utils/supabaseClient';

function NavigationBar() {
    const { signedInUser, setSignedInUser } = useContext(SignedInUserContext);
    const [session, setSession] = useState(null);
  
    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
  
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
  
      return () => subscription.unsubscribe()
    }, [])

    useEffect(() => {
        if (!session){
            setSignedInUser(null)
        } else {
            setSignedInUser(session)
        }
    }, [session])

  return (
    <Navbar collapseOnSelect expand="md" id="main-nav" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to="/">EVENTO</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            {/* <Link to="/eventlist">Events</Link> */}
          </Nav>
          <Nav>
          { !signedInUser ?  <Link to="/account">Login In</Link> :
          <>
              <Link to="/account">Account</Link> 
              <div className="vr" />
              <Link onClick={signOutAcc}>Log Out</Link> 
          </>
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;