import EventCardList from "../components/EventCardList";
import AddToCalendar from "../components/AddToCalendar";

function Homepage () {

    return (<main id="home-page">
        <h1>Homepage</h1>
        <EventCardList />
        <AddToCalendar />
    </main>)
}

export default Homepage;