import supabase from '../utils/supabaseClient';

const upsertProfile = (user_id, user_name, staff) =>{
    if (user_name !== ''){
        console.log(user_id, user_name, staff)
        return supabase.from('profiles')
        .update({ user_name: user_name, staff: staff })
        .eq('user_id', user_id)
        .select();
    }
}

export default upsertProfile;