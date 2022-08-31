import {useState} from 'react';
import { authService } from 'fbase';

import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
} from 'firebase/auth';


const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPasswrod] = useState('');
    const [newAccount, setNewAccount] = useState(true);
    const [error,setError] = useState('');

    const onChange = (event) => {
        const {target: { name, value }} = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPasswrod(value);
        }
    }

    const onSubmit = async (event) => {
        console.log("Sumitted!");
        event.preventDefault(); // form엘리먼트가 submit될 때 페이지를 새로고치는 기본 동작을 막아 리액트 상태가 초기화되지 않게 함.
        try{
            let data;
            if (newAccount) {
                // Create newAccount
                data = await createUserWithEmailAndPassword(authService, email, password); 
            } else {
                // log in
                data = await signInWithEmailAndPassword(authService, email, password);
            }    
            console.log(data);
        } catch (error) {
            setError(error.message); //화면에 error.message 출력
        }
    }

    // useState()함수인 setNewAccount()에 인지 (prev)를 지정해 현재 state값을 받아 그것을 반대값으로 세팅
    const toggleAccount = () => setNewAccount((prev) => !prev);

    return (
        <>
            <form onSubmit={onSubmit}>
                <input name="email" type="email" placeholder="사용자 이메일" required value={email} onChange={onChange} />
                <input name="password" type="password" placeholder="비밀번호" required value={password} onChange={onChange} />
                <input type="submit" value={newAccount? "계정 생성" : "로그인"} />
                <span style={{color:'red'}}>{error}</span>
            </form>
            <span onClick={toggleAccount}>
                {newAccount ? "로그인" : "계정 생성" } 
            </span>
        </>
    );
};

export default AuthForm;