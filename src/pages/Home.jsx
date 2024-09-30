import EventCardList from "../components/EventCardList";
import PageBanner from "../components/PageBanner";

function Homepage () {

    return (<main id="home-page">
        <PageBanner title={'Homepage'}/>
        <EventCardList />
    </main>)
}

export default Homepage;