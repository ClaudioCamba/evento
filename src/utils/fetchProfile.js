import supabase from '../utils/supabaseClient';

const fetchProfile = (user_name) =>{
    return supabase.from('profiles')
    .select()
    .eq('user_name', user_name)
}

export default fetchProfile;