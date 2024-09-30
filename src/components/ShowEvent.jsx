import { useState, useEffect, useContext } from 'react';
import { SignedInUserContext } from '../context/SignedInUser';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import insertSignUpData from '../utils/insertSignUpData';
import fetchSignUp from '../utils/fetchSignUp';
import deleteSignUp from '../utils/deleteSignUp';
import AddToCalendar from './AddToCalendar';


function ShowEvent ({ event }) {
    const { signedInUser, setSignedInUser } = useContext(SignedInUserContext);
    const [signedUp, setSignedUp] = useState(false);
    const url = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
    const navigate = useNavigate();

    const signUp = () => {
        insertSignUpData(event.id,signedInUser.user.id)
        .then(({data})=> {
            if (data.length > 0) setSignedUp(true)
        }).catch((err)=>{ console.log(err) })
    };

    const cancelSignUp = () =>{
        deleteSignUp(event.id,signedInUser.user.id)
        .then(({data})=> {
            if (data.length > 0) setSignedUp(false)
        }).catch((err)=>{ console.log(err) })
    }

    useEffect(()=>{
        if (signedInUser) {
            fetchSignUp(event.id,signedInUser.user.id)
            .then(({data})=> {
                if (data.length > 0) setSignedUp(true)
            }).catch((err)=>{ console.log(err) })
        }
    },[])

    return (<div id="show-event">
        <Image src={`${url}/storage/v1/object/public/${event.img_path}`} fluid />
        <Card>
      <Card.Header as="h1">{event.title}</Card.Header>
      <Card.Body>
        {
            signedInUser ? 
            signedUp ?
            <Row>
                <Col md="auto">
                    <Button variant="danger" onClick={cancelSignUp}>Cancel Sign Up</Button>
                </Col>
                <Col md="auto">
                    <AddToCalendar eventDetail={{event}}/>
                </Col>
            </Row>
            :
            <Button variant="primary" onClick={signUp}>Sign Up</Button> : 
            <Button variant="primary" onClick={()=>{
                navigate('/account', { state: { id: event.id } })
            }}>Log in to sign up</Button>
        }
      
      </Card.Body>
      <Card.Footer>
        <Card.Title>Date: {event.date}</Card.Title>
        <Card.Title>Start Time: {event.time}</Card.Title>
        <Card.Title>Duration: {event.duration} Hours</Card.Title>
        <Card.Title>Address: {event.address}</Card.Title>
        <Card.Title>Price: £{event.price}</Card.Title>
        <Card.Text>{event.event_desc}</Card.Text>
      </Card.Footer>
    </Card>

    </div>)
}

export default ShowEvent;