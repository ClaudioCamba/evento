import { useState, useEffect, useContext } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { SignedInUserContext } from '../context/SignedInUser';
import supabase from '../utils/supabaseClient';
import insertEventData from '../utils/insertEventData';
import fetchEventData from '../utils/fetchEventData';

export default function SignInUpForm() {
  const [session, setSession] = useState(null);
  const { signedInUser, setSignedInUser } = useContext(SignedInUserContext)

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

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={[]} theme="light"/>)
  } else {
    return (
        <div>

            <p>Logged in!</p>

            <button onClick={ async ()=>{
                const { error } = await supabase.auth.signOut()
            }}>Sign out</button>

            <button onClick={()=>{
                insertEventData()
                .then((data)=>{console.log(data)})
                .catch((err)=>{console.log('error',err)})
            }}>User Details</button>

        </div>
    )
  }
}