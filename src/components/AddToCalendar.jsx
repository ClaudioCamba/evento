// Usage with TypeScript or ES6
import { google, outlook, office365, yahoo, ics } from "calendar-link";

function AddToCalendar () {
    // Set event as an object
const event = {
    title: "My birthday party",
    description: "Be there!",
    start: "2019-12-29 18:00:00 +0100",
    duration: [3, "hour"],
  };

// Then fetch the link
const googleUrl = google(event); // https://calendar.google.com/calendar/render..
const outlookUrl = outlook(event); 
const office365Url = office365(event); 
const yahooUrl = yahoo(event); 
const icsUrl = ics(event); 

console.log(googleUrl)
console.log(outlookUrl)
console.log(office365Url)
console.log(yahooUrl)
console.log(icsUrl)

return (
<ul>
    <li>
        <a href={googleUrl} target='_blank'>Add to Google Calendar</a>
    </li>
    <li>
        <a href={outlookUrl} target='_blank'>Add to Outlook Calendar</a>
    </li>
    <li>
        <a href={office365Url} target='_blank'>Add to Office365 Calendar</a>
    </li>
    <li>
        <a href={yahooUrl} target='_blank'>Add to Yahoo Calendar</a>
    </li>
    <li>
        <a href={icsUrl} target='_blank'>Add to Apple Calendar (ics)</a>
    </li>
</ul>
)

}

export default AddToCalendar;