import './Profile.css';
import { UserContext } from '../../context/user/UserContext';
import { useContext, useEffect, useState } from 'react';
import { ThemeColorContext } from '../../context/themeColor/ThemeColorContext';
import { Link } from 'react-router-dom';

const Profile = () => {

    const { getLoggedInUserInfo, currentUserInfo } = useContext(UserContext);
    const { style } = useContext(ThemeColorContext);
    const [ circlePosition, setCirclePosition ] = useState(1);

    const handleClick = () => {
        alert("test");
    }

    const switchActivity = (circlePosition) => {
        if (circlePosition === 1) {
            return (
                <div className='profileBestResultSwitchCircle1'></div>
            )
        }
        if (circlePosition === 2) {
            return (
                <div className='profileBestResultSwitchCircle2'></div>
            )
        }
        if (circlePosition === 3) {
            return (
                <div className='profileBestResultSwitchCircle3'></div>
            )
        } else {
            return null
        }
    }
    // useEffect(() => {
    //     switchActivity();
    // }, [circlePosition])

    const activeCircleClass = `profileBestResultSwitchCircle${circlePosition}`;

    useEffect(() => {
        setTimeout(() => {
            getLoggedInUserInfo();
        }, 1000)
        
    }, [])

    return (
        <div style={style} className='profilePage'>

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

            {/* ======================================== */}
            {/** User best result section */}
            <div className='profileBestResults'>
                <div className='profileBestResultsIcons'>
                    <button className='profileBestResultIconButton' onClick={() => setCirclePosition(1)}><img src='runner.svg'></img></button>
                    <button className='profileBestResultIconButton' onClick={() => setCirclePosition(2)}><img src='biker.svg'></img></button>
                    <button className='profileBestResultIconButton' onClick={() => setCirclePosition(3)}><img src='walker.svg'></img></button>
                </div>
                <div className='profileBestResultSwitch'>
                    {/* {switchActivity(circlePosition)} */}
                    <div className={activeCircleClass}></div>
                </div>
            </div>

        </div>
    )
}

export default Profile;