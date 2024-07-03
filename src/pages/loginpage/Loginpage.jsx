import './Loginpage.css';

const Loginpage = () => {

    return (
        <main className='loginpage'>
            <div className='loginpage-logo'>
                <h1>VitalVibe</h1>
            </div>
            
            <form className='login-form'>
                <input type="text" placeholder='Användarnamn'></input><br></br>
                <input type="text" placeholder='Lösenord'></input><br></br>
                <div className='login-button'>
                    <button type="submit">Logga in</button>
                </div>
                
            </form>
        </main>
    )

}

export default Loginpage;