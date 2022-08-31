import { dbService, storageService } from 'fbase';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { useState } from 'react';
import {ref, deleteObject} from 'firebase/storage';

const Nweet = ({ nweetObj, isOwner}) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);

    const onDeleteClick = async () => {
        const ok = window.confirm("삭제하시겠습니까?");
        if (ok) {
            const data = doc(dbService, 'nweets',`${nweetObj.id}`);
            await deleteDoc(data);
            if (nweetObj.attachmentUrl !== "")
                await deleteObject( ref(storageService, nweetObj.attachmentUrl)); 
        }
    }

    const toggleEditing = () => setEditing( (prev) => !prev);

    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        setNewNweet(value);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(nweetObj.id, newNweet);
        updateDoc(doc(dbService, 'nweets',`${nweetObj.id}`),{text: newNweet} );
        setEditing(false);
    };

    return (
        <div>
            {editing ? (
                <>
                    <form onSubmit={onSubmit}>
                        <input onChange={onChange} value={newNweet} required />
                        <input type='submit' value='Nweet 업데이트' /> 
                    </form>
                    <button onClick={toggleEditing}>취소</button>
                </>
            ) : (
                <>
                    <h4>{nweetObj.text}</h4>
                    {nweetObj.attachmentUrl && (
                        <img src={nweetObj.attachmentUrl} width="50px" height="50px" alt="이미지" />
                    )}
                    {isOwner && (
                        <>
                            <button onClick={onDeleteClick}>Nweet 삭제</button>
                            <button onClick={toggleEditing}>Nweet 편집</button>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Nweet;
