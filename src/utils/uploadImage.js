import supabase from '../utils/supabaseClient';

// Upload file using standard upload
const uploadImage = (file, filename) => {
  return supabase.storage
  .from('events/images')
  .upload(filename, file)
}

export default uploadImage;