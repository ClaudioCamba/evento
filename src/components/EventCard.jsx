import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteEventModal from './DeleteEventModal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function EventCard({event, control}) {
    const [removeCard, setRemoveCard] = useState(false);
    const url = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
    const navigate = useNavigate();

  return (<>
    {
      !removeCard ?
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={`${url}/storage/v1/object/public/${event.img_path}`}/>
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Row>
            <Col><Card.Text>{event.date}</Card.Text></Col>
            <Col><Card.Text>£{event.price}</Card.Text></Col>
          </Row>
          <Row>
          <Col><Button 
              variant="primary" 
              onClick={()=> navigate(`/event/${event.id}`)}
              >Learn more</Button></Col>
              {
                control ?
                <Col>
                  <DeleteEventModal 
                    event={event}
                    setRemoveCard={setRemoveCard}
                  />
                </Col> 
                : null
              }
          </Row>
        </Card.Body>
      </Card> : null
    }
  </>);
}

export default EventCard;