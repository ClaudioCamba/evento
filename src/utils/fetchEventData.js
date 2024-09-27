import supabase from '../utils/supabaseClient';

const fetchEventData = () =>{
    return supabase.from('events')
    .select('*');
}

export default fetchEventData;