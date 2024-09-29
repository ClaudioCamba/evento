import { useState, useEffect, useContext } from 'react';
import { SignedInUserContext } from '../context/SignedInUser';
import { useFetcher, useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import insertSignUpData from '../utils/insertSignUpData';

function ShowEvent ({event}) {
    const { signedInUser, setSignedInUser } = useContext(SignedInUserContext);
    const [signedUp, setSignedUp] = useState(false);
    const url = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
    const navigate = useNavigate();

    const signUp = () => {
        insertSignUpData(event.id,signedInUser.user.id)
        .then((data)=> {
            setSignedUp(data);
        }).catch((err)=>{console.log(err)})
    };

    useEffect(()=>{

    },[])

    return (<div id="show-event">
        <Image src={`${url}/storage/v1/object/public/${event.img_path}`} fluid />
        <Card>
      <Card.Header as="h1">{event.title}</Card.Header>
      <Card.Body>
        {
            signedInUser ? 
            signedUp ? <Button variant="danger" onClick={()=>console.log('cancel signup')}>Cancel Sign Up</Button> :
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