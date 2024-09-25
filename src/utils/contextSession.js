import { useState, useEffect, useContext } from 'react'
import { SignedInUserContext } from '../context/SignedInUser';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_PUBLIC_SUPABASE_URL, import.meta.env.VITE_PUBLIC_SUPABASE_KEY)

export default function contextSession () {
  const { setSignedInUser } = useContext(SignedInUserContext);

  const [session, setSession] = useState(null);
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
  
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  
    return () => subscription.unsubscribe()
  }, [])
  
  useEffect(() => {
      if (!session){
          setSignedInUser(null)
      } else {
          setSignedInUser(session)
      }
  }, [session])
}
