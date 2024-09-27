import supabase from '../utils/supabaseClient';

const insertEventData = ({user_id, email, title, date, address, price, event_desc}) => {
    return supabase.from('events')
    .insert([{ 
        user_id: user_id,
        email: email,
        title: title,
        date: date,
        address: address,
        price: price,
        event_desc: event_desc
    }])
    .select();
}

export default insertEventData;