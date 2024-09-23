import './style/App.css'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient(import.meta.env.VITE_PUBLIC_SUPABASE_URL, import.meta.env.VITE_PUBLIC_SUPABASE_KEY)

export default function SignInUpForm() {
  const [session, setSession] = useState(null)

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
  }
  else {
    return (<div>
      Logged in!
      <button onClick={async ()=>{
        const { error } = await supabase.auth.signOut()
        console.log(error)

      }}>

      </button>
    </div>)
  }
}