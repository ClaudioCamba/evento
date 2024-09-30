import { useState, useEffect, useContext } from 'react';
import fetchEventData from '../utils/fetchEventData';
import EventCard from './EventCard';

function EventCardList () {
    const [events, setEvents] = useState([]);
    
    useEffect(()=>{
        fetchEventData().then(({data})=>{
            setEvents(data)
        }).catch((err)=>{

        })
    },[])

    return (<>
        <h1>Events</h1>
        <div className="event-list">
            {
                events.map((event)=><EventCard key={event.id} event={event}/>)
            }
        </div>
    </>)
}

export default EventCardList;