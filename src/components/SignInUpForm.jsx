import { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import supabase from '../utils/supabaseClient';
import StaffNameInput from './StaffNameInput';
import upsertProfile from '../utils/upsertProfile';

export default function SignInForm({type="sign_in"}) {
  const [session, setSession] = useState(null);
  const [canSignUp, setCanSignUp] = useState(false);
  const [detailName, setDetailName] = useState('');
  const [detailIsStaff, setDetailIsStaff] = useState(false);

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && detailName !== '') {
        upsertProfile(session.user.id, detailName, detailIsStaff)
        .then((data)=> {
          console.log('data',data)
        }).catch((err)=> {
          console.log('err', err)
        }).finally(()=>{
          setDetailName('');
          setDetailIsStaff(false);
          setCanSignUp(false)
        })
    }
  })

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

    return (<>
        { type==='sign_up' && canSignUp === false ?
        <>
          <h1>Sign Up {detailName} {detailIsStaff}</h1> 
          <StaffNameInput
            setDetailIsStaff={setDetailIsStaff}
            setDetailName={setDetailName}
            setCanSignUp={setCanSignUp}
          />
        </>
        : 
        <>
        <h1>Sign In</h1> 
        <Auth supabaseClient={supabase} appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#0d6efd',
                brandAccent: '#0b5ed7',
              },
            },
          },
        }}
        providers={[]} 
        theme="light"
        view={`${type}`}
        showLinks={false}
        />
        </>
      }
    </>)
  }
}