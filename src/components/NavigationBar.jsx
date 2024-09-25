import { useState, useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SignedInUserContext } from '../context/SignedInUser';
import { Link } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_PUBLIC_SUPABASE_URL, import.meta.env.VITE_PUBLIC_SUPABASE_KEY)

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
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to="/">EVENTO</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/eventlist">Events</Link>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Link to="/login">{signedInUser? signedInUser?.user?.email : 'Log in'}</Link>
            <button onClick={()=>{
                console.log(signedInUser)
            }}>TESTS</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;