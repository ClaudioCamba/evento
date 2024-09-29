import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function EventCard({event}) {
    const url = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
    console.log(event)

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${url}/storage/v1/object/public/${event.img_path}`}/>
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;