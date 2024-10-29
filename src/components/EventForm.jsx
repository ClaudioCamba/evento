import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import insertEventData from '../utils/insertEventData';
import uploadImage from '../utils/uploadImage'

function EventForm({signedInUser, setCreatedEvents}) {
  const [validated, setValidated] = useState(false);
  const [formTitle, setFormTitle] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formPrice, setFormPrice] = useState(0);
  const [formAddress, setFormAddress] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [formImage, setFormImage] = useState(null);
  const [formTime, setFormTime] = useState(null);
  const [formDuration, setFormDuration] = useState(1);
  const [isLoading,setIsLoading] = useState(false);
  const [imgError, setImgError] = useState('');
  const [newEvent, setNewEvent] = useState(null);

  const eventDetail = {
    user_id: signedInUser.user.id, 
    email: signedInUser.user.email, 
    title: formTitle, 
    date: formDate, 
    price: formPrice, 
    address: formAddress, 
    event_desc: formDesc,
    img_path: null,
    time: formTime,
    duration: formDuration
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      event.stopPropagation();
      let imgErr = '';
      const imgSizeCheck = formImage.size <= 1000000;
      const formats = ["image/png", "image/jpeg"];
      const imgFormatCheck = formats.some(format => formImage.type.includes(format));

      if (imgSizeCheck === false) imgErr = `Please upload an image size equal to or below 1MB.`;
      if (imgFormatCheck === false) imgErr = `The file format (${formImage.type.split('/')[1]}) does not match acceptable formats (png, jpg, jpeg).`;

      if (imgSizeCheck && imgFormatCheck){
        setIsLoading(true);
        uploadImage(formImage, formImage.name)
        .then(({data})=> {
          eventDetail.img_path = data.fullPath;
          return insertEventData(eventDetail);
        }).then(({data})=> {
          console.log(data[0].id)
          setCreatedEvents((val)=>{
            const newArr = [...val]
            newArr.push(data[0].id);
            console.log(newArr);
            return newArr;
          })
        }).catch((err)=> {
      
        }).finally(()=> {
          setIsLoading(false);
        })
      } 
      
      if (!imgSizeCheck || !imgFormatCheck) {
        setValidated(false);
        setImgError(imgErr);
      } else {
        setValidated(true);
        setImgError('');
      }
    }

  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} id='event-form'>
      {isLoading ? <h1>Loading...</h1> : <h1>Create Event Form</h1>}
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="eventTitle">
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
            type="datetime-local"
            min={new Date().toISOString().split("T")[0]}
            onChange={(event)=>{
              setFormTime(event.target.value.split('T')[1])
              setFormDate(event.target.value)
            }}
            value={formDate}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="eventDuration">
          <Form.Label>Duration (hours)</Form.Label>
          <Form.Control
            required
            type="number"
            min={1}
            onChange={(event)=>{
              setFormDuration(event.target.value)
            }}
            value={formDuration}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="eventPrice">
          <Form.Label>Price (free events enter 0)</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>£</InputGroup.Text>
            <Form.Control 
              aria-label="Amount (to the nearest dollar)" 
              required
              type="number"
              step="any"
              min="0"
              placeholder='0'
              onChange={(event)=>{setFormPrice(event.target.value)}}
              value={formPrice}
            />
          </InputGroup>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="eventAddress">
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
        <Form.Group as={Col} md="12" controlId="eventDescription">
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
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="eventImage">
          <Form.Label>Upload Event Image <small>(image png, jpg or jpeg format and max size 1MB)</small>{imgError !== '' ? <><br></br><strong className="red-text">{imgError}</strong></> : null}</Form.Label>
          <Form.Control 
            required
            type="file"
            accept="image/png, image/jpeg, image/jpg, image/jp2"
            onChange={(event)=> setFormImage(event.target.files[0])}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid image file. (png, jpg or jpeg and max size 1MB)
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default EventForm;