import { Link } from "react-router-dom"

function Header (){
    return(
        <header>
            <h1>King of Coworkings</h1>
            <nav>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/coworkings">coworkings</Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header