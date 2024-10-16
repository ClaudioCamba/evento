import supabase from '../utils/supabaseClient';

export const fetchProfileByName = (user_name) =>{
    return supabase.from('profiles')
    .select()
    .eq('user_name', user_name)
}

export const fetchProfileSignupEvents= (user_id) =>{
    return supabase.from('profiles')
    .select('staff, user_id, user_name, signup(event_id)')
    .eq('user_id', user_id)
}