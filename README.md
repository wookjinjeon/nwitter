# NWITTER
**파이어 베이스와 React JS를 이용한 트위터 클론 만들기  실습** 

- 교재: Do it! 클론 코딩 트위터 (ISBN : 9791163032748)
- 저자: 니꼴라스,김형태 (지은이) | 이지스퍼블리싱(주) | 2021-08-23
- YouTube 강의: [Nomad Coders - React Fundamentals 2019](https://www.youtube.com/watch?v=JtHRa-4MTG4&list=PL7jH19IHhOLPp990qs8MbSsUlzKcTKuCf)


## 코드 실행 방법

### 1.사전 필요 작업 수행
nwitter 폴더에 `.env` 파일 생성

```ini
# ./.env (파이어베이스 콘솔에서 Proejct의 웹애플리케이션 등록 시 보여지는 SDK 설정값 이용해 아래 내용 업데이트 )
REACT_APP_API_KEY =  {YOUR_API_KEY_HERE}
REACT_APP_AUTH_DOMAIN =  {YOUR_PROJECT_ID_HERE}.firebaseapp.com
REACT_APP_PROJECT_ID =  {YOUR_PROJECT_ID_HERE}
REACT_APP_STORAGE_BUCKET =  {YOUR_PROJECT_ID_HERE}.appspot.com
REACT_APP_MESSAGEING_SENDER_ID = {YOUR_MESSAGEING_SENDER_ID_HERE}
REACT_APP_APP_ID = {YOUR_APP_ID_HERE}
```

### 2. 로컬에서 실행

1. 필요 모듈 설치 후 코드 실행
    ```bash
    # 폴더 이동
    $ cd nwitter

    # node 설치되어 있는지 확인
    # > 미설치 시 - https://nodejs.org 에서 최신 nodejs LTS 다운로드 및 설치
    $ node -v               # v16.17.0
    $ npm -v                # 8.17.0

    # react-scripts 설치 
    $ npm install react-scripts --save

    # 구동 테스트 
    $ npm run start
    ```
    
2. 테스트 - 브라우저에서 애플리케이션 접근
    - URL: http://localhost:3000


### 3. GitHub 페이지 배포 

1. `package.json` 의 `homepage` 속성 수정
    ```json
    // 아래 homepage 값을 github id에 맞게 수정
    {
    "homepage": "https://{YOUR_GITHUB_ID_HERE}.github.io/nwitter",

    (...생략...)
    ```

2. 배포 실행
    ```bash
    $ npm run deploy
    ```

3. 테스트 - 브라우저에서 github 페이지 접근
    - url: https://{YOUR_GITHUB_ID_HERE}.github.io/nwitter


## 참고 - 코드 실습 중 참고한 정보 들

**기초:**

- [(violetboralee.medium) React를 배우기 전에 알아야 할 자바스크립트 기초](https://violetboralee.medium.com/react를-배우기-전에-알아야-할-javascript기초-e0665f8cbee0)



**Ch 01 파이어베이스 살펴보기**

- https://firebase.google.com/



**Ch 03 트위터 클론 코딩 시작** 

- [(React 문서) 리액트 상태 - 컴포넌트 State](https://ko.reactjs.org/docs/faq-state.html)
- [(React 문서) 리액트 훅스 - Hook의 개요]( https://ko.reactjs.org/docs/hooks-intro.html)
- [(React 문서) 리액트 useState 함수 - Using the State Hook]( https://ko.reactjs.org/docs/hooks-state.html)



**Ch 04 회원가입, 로그인, 소셜 로그인 기능 만들기**

- [(StackOverflow) What is jsconfig.json](https://stackoverflow.com/questions/68675994/what-is-jsconfig-json)
- [(Wikipedia) Language Server Protocol ](https://en.wikipedia.org/wiki/Language_Server_Protocol)
- [(seondal.log) [Firebase] v9부터 크게 달라진 사용법들](https://velog.io/@seondal/Firebase-v9부터-달라진-인증모듈-사용법)
-  [(StackOverflow)How to redirect in React Router v6? ](https://stackoverflow.com/questions/69868956/how-to-redirect-in-react-router-v6)
- [(ksmfou98.log) React Router v6 업데이트 정리](https://velog.io/@ksmfou98/React-Router-v6-업데이트-정리)



**ch 05 핵심기능 만들기**

- [(seondal.log) [Firebase] v9부터 크게 달라진 사용법들](https://velog.io/@seondal/Firebase-v9부터-달라진-인증모듈-사용법)
- [(hyes-y-tag.log) [React] console.log가 두번 실행된다고?](https://velog.io/@hyes-y-tag/React-useEffect가-두번-실행된다고)
- [(taltube.tistory) react-router-dom v6 무엇이 바뀌었는가?](https://taltube.tistory.com/m/37)
- [(upmostly) React onChange Events (With Examples) ](https://upmostly.com/tutorials/react-onchange-events-with-examples)
- [(dduck.log) 21.10.25 공부기록 - 트윗 삭제/수정/이미지첨부](https://velog.io/@dduck/21.10.25-공부기록)



**Ch 06  사진 미리보기, 저장 기능 만들기** 

- https://github.com/uuidjs/uuid 
- [(StackOverflow) Your bucket has not been set up properly for Firebase Storage](https://stackoverflow.com/questions/71917908/your-bucket-has-not-been-set-up-properly-for-firebase-storage)
- [(StackOverflow)How to upload images to Firebase web v9 using reactjs ](https://stackoverflow.com/questions/69719797/how-to-upload-images-to-firebase-web-v9-using-reactjs)
- [(Firebase 문서) 웹에서 Cloud Storage로 파일다운로드](https://firebase.google.com/docs/storage/web/download-files)



**Ch 07 프로필 페이지와 필터링 기능 만들기**

- [(Firebase 문서) Cloud Firestore에서 단순 쿼리 및 복합 쿼리 실행](https://firebase.google.com/docs/firestore/query-data/queries)
- [(Firebase 문서) Cloud Firestore로 데이터 정렬 및 제한]( https://firebase.google.com/docs/firestore/query-data/order-limit-data )



**Ch 08 깃허브로 누이터 배포하고 보안 챙기기**

- https://pages.github.com/

