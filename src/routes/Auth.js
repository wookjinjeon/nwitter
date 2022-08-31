import { authService } from 'fbase';
import AuthForm from 'components/AuthForm';

import {
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider 
} from 'firebase/auth';

const Auth = () => {
 
    const onSocialClick = async (event) => {
        const {
            target: { name },
        } = event;
        let provider;
        if (name === "google") {
            provider = new GoogleAuthProvider();
        } else if (name === 'github') {
            provider = new GithubAuthProvider();
        }
        const data = await signInWithPopup(authService, provider);
        console.log(data)
    };

    return (
        <div>
            <AuthForm />
            <div>
                <button onClick={onSocialClick} name ="google">Google로 로그인</button>
                <button onClick={onSocialClick} name ="github">Github로 로그인</button>
            </div>
        </div>
    );
};

export default Auth;