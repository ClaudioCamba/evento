import supabase from '../utils/supabaseClient';

const insertSignUpData = (event_id, user_id) =>{
    return supabase.from('signup')
    .insert([{ 
        event_id: event_id,
        user_id: user_id
    }])
    .select();
}

export default insertSignUpData;