import supabase from '../utils/supabaseClient';
import { getDateString } from './helperFunctions';

// Upload file using standard upload
const uploadImage = (file, filename) => {
  return supabase.storage
  .from('events/images')
  .upload(getDateString(filename), file)
}

export default uploadImage;