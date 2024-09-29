import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import fetchSelectedEvent from '../utils/fetchSelectedEvent';
import ShowEvent from '../components/ShowEvent';

function EventPage () {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [status, setStatus] = useState(null)
    const  { id } = useParams();

    useEffect(() =>{
        setIsLoading(true)
        fetchSelectedEvent(id)
        .then(({data})=>{
            if (data.length === 0) {
                setStatus('Event could not be found')
            }
            setSelectedEvent(data[0])
        }).catch((err)=>{
            setStatus('Error while loading page')
        }).finally(()=>{
            setIsLoading(false)
        })
    },[])

    return (<main id="event-page">
        {
            isLoading ? <h1>Loading</h1> : status ? <h1>{status}</h1> :
            <ShowEvent event={selectedEvent}/>
        }
    </main>)
}

export default EventPage;