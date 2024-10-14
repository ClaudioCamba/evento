import { createContext, useState, useEffect } from 'react';
import supabase from '../utils/supabaseClient';
export const SignedInUserContext = createContext(null);

export const SignedInUserProvider = ({ children }) => {
  const [signedInUser, setSignedInUser] = useState(null);

  useEffect(() => {
    const {data: { subscription }} = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT') {
          setSignedInUser(null)
        } else if (session) {
          setSignedInUser(session)
        }
      })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <SignedInUserContext.Provider value={{ signedInUser }}>
      {children}
    </SignedInUserContext.Provider>
  );
};