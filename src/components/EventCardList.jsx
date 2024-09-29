import { useState, useEffect, useContext } from 'react';
import fetchEventData from '../utils/fetchEventData';
import EventCard from './EventCard';

function EventCardList () {
    const [events, setEvents] = useState([]);
    
    useEffect(()=>{
        fetchEventData().then(({data})=>{
            setEvents(data)
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return (<div id="event-list">
        <h1>Event Grid</h1>
        {
            events.map((event)=><EventCard key={event.id} event={event}/>)
        }
    </div>)
}

export default EventCardList;