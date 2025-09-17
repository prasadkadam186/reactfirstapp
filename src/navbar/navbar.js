// Purpose of Link : its used for routing without refreshing the page (<a> tag refesh the entire page that's why we are using this link tag)
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">ReactFirstApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/teacher">Teacher</Link>
                            </li> */}
                            <NavLink className={({ isActive }) =>isActive ? "nav-link active-link" : "nav-link"} to="/teacher">Teacher</NavLink>
                            {/* Component Dropdown Menu */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Components Types
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="nav-item">
                                        <NavLink className={({isActive})=>isActive ? "dropdown-menu .active-link" : "dropdown-menu"} to="/student">propsWithClassComp</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/props">propsWithFuncComp</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/ControlledComponent">ControlledComponent</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/UncontrolledComponent">UncontrolledComponent</NavLink>
                                    </li>
                                </ul>
                            </li>
                            {/* Life Cycle Dropdown Menu */}
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
                                    <li>
                                        <Link className="dropdown-item" to="ComponentDidUpdate">ComponentDidUpdate</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="ComponentShouldUpdate">ComponentShouldUpdate</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="ComponentWillUnmountParent">ComponentWillUnmountParent</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Hooks Dropdown Menu */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Hooks
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="UserEffectHook">UserEffectHook</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="UseEffectWithConditionOnState">UseEffectWithConditionOnState</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="UseEffectWithConditionForPropsParent">UseEffectWithConditionForProps</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="UserMemoComponent">UserMemoComponent</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="RefComponents">RefComponents</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="FordwardRefParentComponent">Fordward Ref Component</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/UseSearchParamsHook?name=Prasad&age=25">useSearchParamsHook</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* React Form dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">React Form</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Loginform">React Forms</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Conditionalrendering">Conditionalrendering</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/Inputbox">InputField</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Collection dropdown  */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Collection</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="ArrayListWithMap">ArrayListWithMap</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="NestedArray">NestedArrayWithNestedMap</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="ReusableParent">ReusableParent & Lifting State up</Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">HOC (High Order Component)</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="HocComponent">HocComponent</Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Use of Param's</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/RoleBasedPageInfo/firstUser">First User</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/RoleBasedPageInfo/secondUser">Second User</Link>
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