import supabase from '../utils/supabaseClient';

// Upload file using standard upload
const uploadImage = (file) => {
  return supabase.storage
  .from('events')
  .upload('file_path', file)
}

export default uploadImage;