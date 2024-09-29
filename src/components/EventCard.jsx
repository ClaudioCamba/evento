import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function EventCard({event}) {
    const url = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
    const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${url}/storage/v1/object/public/${event.img_path}`}/>
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        <Card.Text>{event.date}</Card.Text>
        <Row>
            <Col><Button 
            variant="primary" 
            onClick={()=> navigate(`/event/${event.id}`)}
            >Learn more</Button></Col>
            <Col><Card.Subtitle>£{event.price}</Card.Subtitle></Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default EventCard;