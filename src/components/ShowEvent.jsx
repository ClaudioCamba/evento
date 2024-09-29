import { useState, useEffect, useContext } from 'react';
import { SignedInUserContext } from '../context/SignedInUser';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ShowEvent ({event}) {
    const { signedInUser, setSignedInUser } = useContext(SignedInUserContext);
    const url = import.meta.env.VITE_PUBLIC_SUPABASE_URL;

   useEffect(()=>{
    console.log(signedInUser)
   },[signedInUser]);

    return (<div id="show-event">
        <Image src={`${url}/storage/v1/object/public/${event.img_path}`} fluid />
        <Card>
      <Card.Header as="h1">{event.title}</Card.Header>
      <Card.Body>
        {
            signedInUser ? <Button variant="primary">Sign Up</Button> : 
            <Button variant="primary">Login to sign up</Button>
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