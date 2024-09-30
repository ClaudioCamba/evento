// Usage with TypeScript or ES6
import { google, outlook, office365, yahoo, ics } from "calendar-link";
import Dropdown from 'react-bootstrap/Dropdown';

function AddToCalendar ({eventDetail = null}) {

// Set event as an object
const event = {
    title: `${eventDetail.event.title}`,
    description: `${eventDetail.event?.event_desc}`,
    start: `${eventDetail.event.date} ${eventDetail?.event?.time} +0100`,
    duration: [eventDetail.event.duration, "hour"],
  };
  
// Then fetch the link
const googleUrl = google(event);
const outlookUrl = outlook(event); 
const office365Url = office365(event); 
const yahooUrl = yahoo(event); 
const icsUrl = ics(event); 

return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={googleUrl} target="_blank">Google</Dropdown.Item>
        <Dropdown.Item href={outlookUrl} target="_blank">Outlook</Dropdown.Item>
        <Dropdown.Item href={office365Url} target="_blank">Office365</Dropdown.Item>
        <Dropdown.Item href={yahooUrl} target="_blank">Yahoo</Dropdown.Item>
        <Dropdown.Item href={icsUrl} target="_blank">Apple (ICS)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
)

}

export default AddToCalendar;