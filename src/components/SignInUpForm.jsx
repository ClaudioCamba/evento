import { useState, useEffect, useContext } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { SignedInUserContext } from '../context/SignedInUser';

const supabase = createClient(import.meta.env.VITE_PUBLIC_SUPABASE_URL, import.meta.env.VITE_PUBLIC_SUPABASE_KEY)

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

            <button onClick={ async ()=>{
                const { data: { user } } = await supabase.auth.getUser()
                console.log(user)
                console.log(signedInUser)
            }}>User Details</button>

        </div>
    )
  }
}