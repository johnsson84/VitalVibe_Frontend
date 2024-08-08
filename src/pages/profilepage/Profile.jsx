import './Profile.css';
import { UserContext } from '../../context/user/UserContext';
import { useContext, useEffect, useState } from 'react';
import { ThemeColorContext } from '../../context/themeColor/ThemeColorContext';

const Profile = () => {

    const { getLoggedInUserInfo, currentUserInfo } = useContext(UserContext);
    const { style } = useContext(ThemeColorContext);

    const [ circlePosition, setCirclePosition ] = useState(1);
    const [currentUserRunningResults, setCurrentUserRunningResults] = useState({});
    const [currentUserBikingResults, setCurrentUserBikingResults] = useState({});
    const [currentUserWalkingResults, setCurrentUserWalkingResults] = useState({});
    
    
    

    const handleClick = () => {
        alert("Inget implementerat än...");
    }

    const activeCircleClass = `profileBestResultSwitchCircle${circlePosition}`;

    const showResultContent = (circlePosition) => {
        if (circlePosition === 1) {
            return (
                <>
                    <p>Tid:</p>
                    <p>5km: {Math.floor(currentUserRunningResults.fivekm / 60)}min {currentUserRunningResults.fivekm % 60}sek</p>
                    <p>10km: {Math.floor(currentUserRunningResults.tenkm / 60)}min {currentUserRunningResults.tenkm % 60}sek</p>
                    <p>15km: {Math.floor(currentUserRunningResults.fifteenkm / 60)}min {currentUserRunningResults.fifteenkm % 60}sek</p>
                    <p>21km: {Math.floor(currentUserRunningResults.halfmarathon / 60)}min {currentUserRunningResults.halfmarathon % 60}sek</p>
                    <p>42km: {Math.floor(currentUserRunningResults.marathon / 60)}min {currentUserRunningResults.marathon % 60}sek</p>
                </>
            )
        }
        if (circlePosition === 2) {
            return (
                <>
                    <p>PtW:</p>
                    <p>5sek: {currentUserBikingResults.ptw_5s} W/kg</p>
                    <p>60sek: {currentUserBikingResults.ptw_60s} W/kg</p>
                    <p>5min: {currentUserBikingResults.ptw_5min} W/kg</p>
                    <p>60min: {currentUserBikingResults.ptw_60min} W/kg</p>
                </>
            )
        }
        if (circlePosition === 3) {
            return (
                <>
                    <p>Tid:</p>
                    <p>2km: {Math.floor(currentUserWalkingResults.two_km / 60)}min {currentUserWalkingResults.two_km % 60}sek</p>
                    <p>5km: {Math.floor(currentUserWalkingResults.five_km / 60)}min {currentUserWalkingResults.five_km % 60}sek</p>
                    <p>7km: {Math.floor(currentUserWalkingResults.seven_km / 60)}min {currentUserWalkingResults.seven_km % 60}sek</p>
                    <p>10km: {Math.floor(currentUserWalkingResults.ten_km / 60)}min {currentUserWalkingResults.ten_km % 60}sek</p>
                    <p>15km: {Math.floor(currentUserWalkingResults.fifteen_km / 60)}min {currentUserWalkingResults.fifteen_km % 60}sek</p>
                    <p>20km: {Math.floor(currentUserWalkingResults.twenty_km / 60)}min {currentUserWalkingResults.twenty_km % 60}sek</p>
                </>
            )
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getLoggedInUserInfo();
        }, 1000)
        
    }, [])

    useEffect(() => {
        if (currentUserInfo && currentUserInfo.runningResults) {
            setCurrentUserRunningResults(currentUserInfo.runningResults);
            setCurrentUserBikingResults(currentUserInfo.bikingResults);
            setCurrentUserWalkingResults(currentUserInfo.walkingResults);
            // console.log(currentUserRunningResults)
        }
        
      }, [currentUserInfo])

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
                    <div className={activeCircleClass}></div>
                </div>
                <div className='profileBestResultContent'>
                    <p id='bestResults'>Dina Bästa Resultat</p>
                    {showResultContent(circlePosition)}
                    <p id='bestResult-vitalvibe'>VitalVibe</p>
                </div>
            </div>

        </div>
    )
}

export default Profile;