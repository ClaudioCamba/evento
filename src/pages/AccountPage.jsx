import { useState, useEffect, useContext } from 'react';
import { SignedInUserContext } from '../context/SignedInUser';
import { useLocation, useNavigate } from 'react-router-dom';
import SignInUpForm from "../components/SignInUpForm";
import EventForm from '../components/EventForm';
import PageBanner from '../components/PageBanner';
import { fetchProfileSignupEvents } from '../utils/fetchProfile';
import { fetchEventsByIds } from '../utils/fetchEventData';
import EventCardList from "../components/EventCardList";

function AccountPage () {
    const { signedInUser } = useContext(SignedInUserContext);
    const [isStaff, setIsStaff] = useState(false);
    const [attendEvents, setAttendEvents] = useState([]);

    useEffect(()=> {
        fetchProfileSignupEvents(signedInUser.user.id)
        .then(({data}) => {
            if (data.length > 0) {
                if (data[0].hasOwnProperty("staff")){
                    setIsStaff(data[0].staff)
                }
                if (data[0].hasOwnProperty("signup")){
                    const eventIds = data[0].signup.map((id)=> id.event_id);
                    setAttendEvents(eventIds)
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
                attendEvents.length > 0 ?
                <EventCardList 
                    title={`Events i've signed up for...`} 
                    showEventsIds={attendEvents}
                /> : null
            }
        </main>
    )
}

export default AccountPage;