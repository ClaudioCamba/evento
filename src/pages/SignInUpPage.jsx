import { useLocation, useNavigate } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import SignInUpTabs from '../components/SignInUpTabs';

function SignInUpPage () {
    const { pathname } = useLocation();

    return (
        <main id="sign-page">
            <SignInUpTabs type={pathname.split('/')[1]} />
        </main>
    )
}

export default SignInUpPage;