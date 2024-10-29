import supabase from '../utils/supabaseClient';

const deleteImage = (img_name) =>{
    return supabase
    .storage
    .from('events/images')
    .remove([img_name])
}

export default deleteImage;