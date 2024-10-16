import supabase from '../utils/supabaseClient';

export const fetchEvents = () =>{
    return supabase.from('events')
    .select('*')
    .order('created_at', { ascending: false });
}

export const fetchEventsByIds = (ids) =>{
    return supabase.from('events')
    .select()
    .in('id', ids)
    .order('date', { ascending: true });
}