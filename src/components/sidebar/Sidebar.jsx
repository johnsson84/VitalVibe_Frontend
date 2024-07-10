// STUFF
import { Link } from 'react-router-dom';

// CSS
import './Sidebar.css';

const Sidebar = () => {

    return (
        <sidebar>
            <nav>

                {/** Maybe we change text to icons later? */}

                <Link className='sideLink' to="/training">Logga<br></br>träning</Link>
                <Link className='sideLink' to="/food">Logga<br></br>mat</Link>
                <Link className='sideLink' to="/challenges">Se<br></br>utmaningar</Link>
                <Link className='sideLink' to="/profile">Profil</Link>
                <Link className='sideLink' to="/about">Om oss</Link>
            </nav>
        </sidebar>
    )
}

export default Sidebar;