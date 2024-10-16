export const updateDate = (events=[]) =>{
    if (events != []){
        const newEvents = events.map((event)=>{
            event.date = event.date.split('-').reverse().join(' / ')
            return event;
        })
        return newEvents;
    }
}