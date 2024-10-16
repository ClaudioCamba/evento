import supabase from '../utils/supabaseClient';

const deleteEvents = (event_id, user_id) =>{
    return supabase.from('events')
    .delete()
    .eq('id', event_id)
    .eq('user_id', user_id)
    .select();
}

export default deleteEvents;