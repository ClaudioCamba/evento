import supabase from '../utils/supabaseClient';

const fetchSignUp = (event_id, user_id) =>{
    return supabase.from('signup')
    .select()
    .eq('event_id', event_id)
    .eq('user_id', user_id)
}

export default fetchSignUp;