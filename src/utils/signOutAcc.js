import supabase from './supabaseClient';

// Sign out function
const signOutAcc = () => {
  return supabase.auth.signOut()
}

export default signOutAcc;