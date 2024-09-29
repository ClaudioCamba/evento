import EventCardList from "../components/EventCardList";
import AddToCalendar from "../components/addToCalendar";

function Homepage () {

    return (<main id="home-page">
        <h1>Homepage</h1>
        <EventCardList />
        <AddToCalendar />
    </main>)
}

export default Homepage;