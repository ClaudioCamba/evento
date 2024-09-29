import supabase from '../utils/supabaseClient';

const fetchSelectedEvent = (id) =>{
    return supabase.from('events')
    .select('*')
    .eq('id', id);
}

export default fetchSelectedEvent;