import { useState, useEffect, useContext } from 'react';
import { SignedInUserContext } from '../context/SignedInUser';
import EventForm from '../components/EventForm';
import PageBanner from '../components/PageBanner';
import { fetchProfileSignupEvents } from '../utils/fetchProfile';
import EventCardList from "../components/EventCardList";

function AccountPage () {
    const { signedInUser } = useContext(SignedInUserContext);
    const [isStaff, setIsStaff] = useState(false);
    const [attendEvents, setAttendEvents] = useState([]);
    const [createdEvents, setCreatedEvents] = useState([]);

    useEffect(()=> {
        fetchProfileSignupEvents(signedInUser.user.id)
        .then(({data}) => {
            if (data.length > 0) {
                if (data[0].hasOwnProperty("staff")){
                    setIsStaff(data[0].staff);
                }
                if (data[0].hasOwnProperty("events")){
                    const createdEventIds = data[0].events.map((event)=> event.id);
                    setCreatedEvents(createdEventIds);
                }
                if (data[0].hasOwnProperty("signup")){
                    const attendEventIds = data[0].signup.map((sign)=> sign.event_id);
                    setAttendEvents(attendEventIds);
                }
            }
        }).catch((err)=>{
            console.log('ERROR (fetchProfileSignupEvents)', err)
        })
    },[]);

    return (
        <main id="account-page">
            {
                isStaff ? 
                <>
                    <h1>Staff Account</h1>
                    <EventForm signedInUser={signedInUser} />
                </> :
                <>
                    <h1>User Account</h1>
                </>
            }
            {
                createdEvents.length > 0 ?
                <EventCardList 
                    title= {`Created Events`} 
                    showEventsIds= {createdEvents}
                    control= {isStaff}
                /> : null
            }
            {
                attendEvents.length > 0 ?
                <EventCardList 
                    title= {`Events To Attend`} 
                    showEventsIds={attendEvents}
                /> : null
            }
        </main>
    )
}

export default AccountPage;