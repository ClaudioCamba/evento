import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import insertEventData from '../utils/insertEventData'

function EventForm({signedInUser}) {
  const [validated, setValidated] = useState(false);
  const [formTitle, setFormTitle] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formPrice, setFormPrice] = useState('');
  const [formAddress, setFormAddress] = useState('');
  const [formDesc, setFormDesc] = useState('');
  // const [formImage, setFormImage] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      const eventDetail = {
        user_id: signedInUser.user.id, 
        email: signedInUser.user.email, 
        title: formTitle, 
        date: formDate, 
        price: formPrice, 
        address: formAddress, 
        event_desc: formDesc
      }
      // console.log(formImage)
      // insertEventData(eventDetail).then((data)=>{
      //   console.log(data)
      // }).catch((err)=>console.log(err))
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="8" controlId="eventTitle">
          <Form.Label>Event Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Football"
            onChange={(event)=>{setFormTitle(event.target.value)}}
            value={formTitle}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="eventDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            type="date"
            min={new Date().toISOString().split("T")[0]}
            onChange={(event)=>{setFormDate(event.target.value)}}
            value={formDate}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="eventPrice">
          <Form.Label>Price</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>£</InputGroup.Text>
            <Form.Control 
              aria-label="Amount (to the nearest dollar)" 
              required
              type="number"
              step="any"
              min="0"
              placeholder='For free events enter 0'
              onChange={(event)=>{setFormPrice(event.target.value)}}
              value={formPrice}
            />
          </InputGroup>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="8" controlId="eventAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Address" 
            required
            onChange={(event)=>{setFormAddress(event.target.value)}}
            value={formAddress}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid address.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="8" controlId="eventDescription">
          <Form.Label>Event Description</Form.Label>
          <Form.Control 
            as="textarea" 
            placeholder="Event description..." 
            rows={3} 
            required
            onChange={(event)=>{setFormDesc(event.target.value)}}
            value={formDesc}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid description.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      {/* <Row className="mb-3">
        <Form.Group as={Col} md="8" controlId="eventImage">
          <Form.Label>Event Image</Form.Label>
          <Form.Control 
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(event)=> setFormImage(event.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid image file.
          </Form.Control.Feedback>
        </Form.Group>
      </Row> */}
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default EventForm;