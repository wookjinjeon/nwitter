import { useState } from "react";
import { dbService, storageService } from "fbase";
import  { collection, addDoc} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadString , getDownloadURL} from 'firebase/storage';

const NweetFactory = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [attachment, setAttachment] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        
        let attachmentUrl = ""; // attachmentUrl 값 초기화
        if (attachment !== "") {
            // attchment 값이 있을 때만 스토리지에 파일 등록
            const attachmentRef = ref(storageService,`${userObj.uid}/${uuidv4()}`);
            const response = await uploadString(attachmentRef, attachment, 'data_url');
            attachmentUrl = await getDownloadURL(response.ref);
        }

        await addDoc(collection(dbService,"nweets"),{
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl
        });

        // 저장 완료 후 nweet과 attachment 상태를 다시 빈문자열로 초기화
        setNweet("");
        setAttachment("");       
    };

    const onChange = (event) => {
        event.preventDefault();
        const {
            target: {value}
        } = event;
        setNweet(value);
    };

    const onFileChange = (event) => {
        // console.log(onFileChange, event.target.files);
        const {
            target: { files }
        } = event;
        const theFile = files[0];
       // 파일을 웹브라우저에 출력하기 위해 브라우저 API인 FileReader() 사용.
        const reader = new FileReader();
        // readAsDataURL : 파일정보를 인자로 받아 파일 위치를 URL로 반환 (img 엘리먼트를 이용해서 사진을 웹 브라우저에서 출력가능) 
        // - readAsDataURL이 URL을 제대로 얻을 수 있게 '웹브라우저가 파일을 인식하고 끝난 시점`까지 함께 관리해 줘야 URL을 얻을 수 있음.
        reader.onloadend = (finishedEvent) => {
            // console.log( finishedEvent);
            const {
                currentTarget: { result }
            } = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile); 
    };

    const onClearAttachment = () => setAttachment("");

    return (
        <form onSubmit={onSubmit}>
            <input
                value={nweet}
                onChange={onChange}
                type="text"
                placeholder="무슨 생각을 하고 있나요?"
                maxLength={120}
            />
            <input type="file" accept="imae/*" onChange={onFileChange} />
            <input type="submit" value="트윗" />
            {attachment && (
                <div>
                    <img src={attachment} width="50px" height="50px" alt="이미지" />
                    <button onClick={onClearAttachment}>삭제</button>
                </div>
            )}
        </form>
    )
};

export default NweetFactory;
