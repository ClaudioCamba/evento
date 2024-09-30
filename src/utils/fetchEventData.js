import supabase from '../utils/supabaseClient';

const fetchEventData = () =>{
    return supabase.from('events')
    .select('*')
    .order('created_at', { ascending: false });
}

export default fetchEventData;