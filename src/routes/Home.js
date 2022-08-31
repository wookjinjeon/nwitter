import { dbService} from "fbase";
import  { collection, onSnapshot} from "firebase/firestore";
import { useEffect, useState } from "react";
import Nweet from 'components/Nweet';
import NweetFactory from 'components/NweetFactory';

const Home = ({userObj}) => {
    const [nweets, setNweets] = useState([]);

    // useEffect의 사용: 컴포넌트가 모두 마운트된 이후에 문서들을 가져옴.
    useEffect(() => {
        onSnapshot(collection(dbService, "nweets"), (snapshot) => {
                const newArray = [];
                snapshot.forEach((document) =>(newArray.push({
                    id: document.id, 
                    ...document.data()
                })));
                setNweets(newArray);
            });        
    },[]);

    return (
        <>
        <NweetFactory userObj={userObj}/>
        <div>
            {nweets.map((nweet) => (
                <Nweet 
                    key={nweet.id} 
                    nweetObj={nweet}
                    isOwner={nweet.creatorId === userObj.uid} 
                />
            ))}
        </div>
        </>
    );

};

export default Home;