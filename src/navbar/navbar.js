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
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar 