import './Profile.css';

const Profile = () => {

    const handleClick = () => {
        alert("test");
    }

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
                    <p>28</p>
                </div>
                <div className='profileUserInfoContent'>
                    <p>Vo2Max:</p>
                    <p>45</p>
                </div>
                <div className='profileUserInfoContent'>
                    <p>Vikt:</p>
                    <p>84</p>
                </div>
            </div>

        </div>
    )
}

export default Profile;