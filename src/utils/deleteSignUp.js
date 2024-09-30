import supabase from '../utils/supabaseClient';

const deleteSignUp = (event_id, user_id) =>{
    return supabase.from('signup')
    .delete()
    .eq('event_id', event_id)
    .eq('user_id', user_id)
    .select();
}

export default deleteSignUp;