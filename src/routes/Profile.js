import { authService } from 'fbase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Profile = ( {userObj, refreshUser}) => {
    const navigate = useNavigate();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    
    const onLogOutClick = () => {
        authService.signOut();
        navigate('/');
    }

    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        setNewDisplayName(value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({displayName: newDisplayName});
            refreshUser();
        }
     }

    return(
        <>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName} />
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onLogOutClick}>로그 아웃</button>
        </>
    );
};

export default Profile;
