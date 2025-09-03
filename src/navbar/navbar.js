import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">ReactFirstApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/teacher">Teacher</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/student">propsWithClassComp</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/props">propsWithFuncComp</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Loginform">React Forms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Conditionalrendering">Conditionalrendering</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/Inputbox">InputField</Link>
                            </li>
                            {/* Dropdown Menu */}
                            <li className="nav-item dropdown">
                                <a 
                                    className="nav-link dropdown-toggle" 
                                    href="#" 
                                    id="navbarDropdown" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    Life Cycle Methods
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="ConstructorClass">ConstructorClass</Link>
                                    </li>
                                     <li>
                                        <Link className="dropdown-item" to="RenderMethodClass">RenderMethodClass</Link>
                                    </li>
                                     <li>
                                        <Link className="dropdown-item" to="ComponentDidMount">ComponentDidMount</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar 