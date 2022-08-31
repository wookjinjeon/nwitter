import { useEffect, useState } from 'react';      
import AppRouter from 'components/Router';
import { authService } from 'fbase';
import {updateProfile} from 'firebase/auth';

function App() {
  const [init,setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  // useEffect(): 특정시점에 실행되는 함수
  useEffect(() =>{
    authService.onAuthStateChanged((user) => {
      if (user) {  //로그인 상태 감지
        // user내에 꼭 필요한 속성만 사용함으로써 userObj를 가볍게 만듬
        setUserObj({
          uid: user.uid,
          displayName: user.displayName,
          updateProfile: (args) => updateProfile(user, args)
        });
      } else {
        setUserObj(false);
      }
      setInit(true);  // init 상태 변경
    });
  },[]);
  
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      uid: user.uid,
      displayName: user.displayName,
      updateProfile: (args) => updateProfile(user, args)
    })
  }

  return (
    <>
      {init? (
          <AppRouter 
            refreshUser={refreshUser} 
            isLoggedIn = {Boolean(userObj)}
            userObj={userObj} 
          /> 
        ) :   (
          "초기화 중..."
        )}
    </>
  );
}

export default App;
