import { useState, useEffect, useContext } from 'react';
import { fetchEvents, fetchEventsByIds } from '../utils/fetchEventData';
import { updateDate } from '../utils/updateDateFormat';
import EventCard from './EventCard';

function EventCardList ({title="Events", showEventsIds = []}) {
    const [events, setEvents] = useState(showEventsIds);
    
    useEffect(()=> {
        if (showEventsIds.length > 0){
            fetchEventsByIds(showEventsIds)
            .then(({data})=>{
                setEvents(updateDate(data));
            }).catch((err)=>{
                console.log('ERROR (fetchEventsByIds)', err)
            })
        } else {
            fetchEvents()
            .then(({data})=>{
                setEvents(updateDate(data));
            }).catch((err)=>{
                console.log('ERROR (fetchEventData)', err)
            })
        }
    },[])

    return (<>
        <h1>{title}</h1>
        <div className="event-list">
            {
                events.map((event, index)=> <EventCard key={`${event.id}${index}`} event={event}/>)
            }
        </div>
    </>)
}

export default EventCardList;