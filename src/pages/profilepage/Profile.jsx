import './Profile.css';
import { UserContext } from '../../context/user/UserContext';
import { useContext, useEffect } from 'react';

const Profile = () => {

    const { getLoggedInUserInfo, currentUserInfo } = useContext(UserContext);

    const handleClick = () => {
        alert("test");
    }

    useEffect(() => {
        setTimeout(() => {
            getLoggedInUserInfo();
        }, 1000)
        
    }, [])

    return (
        <div className='profilePage'>

            {/* ======================================== */}
            {/** Upper section */}
            <div className='profileUpper'>
                <div className='profilePicture'>
                    <img src='profile_placeholder.svg'></img>
                </div>
                <div className='profileButtons'>
                    <button id='profileButtonA' onClick={handleClick}><img id='profileButtonImgA' src='cog_icon.svg'></img></button>
                    <button id='profileButtonB' onClick={handleClick}><img id='profileButtonImgB' src='food.svg'></img></button>
                </div>
            </div>
            
            {/* ======================================== */}
            {/** User info section */}
            <div className='profileUserInfo'>
                <div className='profileUserInfoContent'>
                    <p>Ålder:</p>
                    {currentUserInfo.age}
                </div>
                <div className='profileUserInfoContent'>
                    <p>Vo2Max:</p>
                    {currentUserInfo.vo2max}
                </div>
                <div className='profileUserInfoContent'>
                    <p>Vikt:</p>
                    {currentUserInfo.weight}
                </div>
            </div>

        </div>
    )
}

export default Profile;