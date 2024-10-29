import { useState, useEffect, useContext } from 'react';
import { SignedInUserContext } from '../context/SignedInUser';
import EventForm from '../components/EventForm';
import PageBanner from '../components/PageBanner';
import { fetchProfileSignupEvents } from '../utils/fetchProfile';
import EventCardList from "../components/EventCardList";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function AccountPage () {
    const { signedInUser } = useContext(SignedInUserContext);
    const [isStaff, setIsStaff] = useState(false);
    const [attendEvents, setAttendEvents] = useState([]);
    const [createdEvents, setCreatedEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        setIsLoading(true);
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
        }).finally(()=>{
            setIsLoading(false);
        });
    },[]);

    if(isLoading){
        return (<main id="account-page"><h1>Loading Account...</h1></main>)
    } else {
        if (isStaff){
            return (<main id="account-page">
                    <PageBanner title={'Staff Account'}/>
                    <Tabs
                        defaultActiveKey="Create Event Form"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        justify
                    >
                    <Tab eventKey="Create Event Form" title="Create Event Form">
                        <EventForm 
                            signedInUser={signedInUser} 
                            setCreatedEvents={setCreatedEvents} 
                        />
                    </Tab>
                    <Tab eventKey="Created Events" title="Created Events">
                    {
                        createdEvents.length > 0 ?
                        <EventCardList 
                            title= {`Created Events`} 
                            showEventsIds= {createdEvents}
                            control= {isStaff}
                        /> : <h1>You haven't created any events yet!</h1>
                    }
                    </Tab>
                    <Tab eventKey="Events To Attend" title="Events To Attend">
                        {
                        attendEvents.length > 0 ?
                        <EventCardList 
                            title= {`Events To Attend`} 
                            showEventsIds={attendEvents}
                        />
                        : <h1>You haven't signed up to any events yet!</h1>
                        }
                    </Tab> 
                    </Tabs>
                </main>)
        } else {
            return (<main id="account-page">
                <PageBanner title={'User Account'}/>
                <Tabs
                    defaultActiveKey="Events To Attend"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    justify
                >
                <Tab eventKey="Events To Attend" title="Events To Attend">
                    {
                    attendEvents.length > 0 ?
                    <EventCardList 
                        title= {`Events To Attend`} 
                        showEventsIds={attendEvents}
                    />
                    : <h1>You haven't signed up to any events yet!</h1>
                    }
                </Tab> 
                </Tabs>
            </main>)
        }
    }
}

export default AccountPage;