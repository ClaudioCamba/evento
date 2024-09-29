import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import fetchSelectedEvent from '../utils/fetchSelectedEvent';

function EventPage () {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const  { id } = useParams();

    useEffect(() =>{
        setIsLoading(true)
        fetchSelectedEvent(id)
        .then(({data})=>{
            setSelectedEvent(data[0])
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            setIsLoading(false)
        })
    },[])

    return (<main id="event-page">
        {
            isLoading ? <h1>Loading</h1> :
            <h1>Event Component</h1>
        }
        
    </main>)
}

export default EventPage;