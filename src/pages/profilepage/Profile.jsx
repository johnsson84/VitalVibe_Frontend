import './Profile.css';

const Profile = () => {

    const handleClick = () => {
        alert("test");
    }

    return (
        <div className='profilePage'>
            <div className='profileUpper'>
                <div className='profilePicture'>
                    <img src='profile_placeholder.svg'></img>
                </div>
                <div className='profileButtons'>
                    <button id='profileButtonA' onClick={handleClick}><img id='profileButtonImgA' src='cog_icon.svg'></img></button>
                    <button id='profileButtonB' onClick={handleClick}><img id='profileButtonImgB' src='food.svg'></img></button>
                </div>
            </div>
            
        </div>
    )
}

export default Profile;