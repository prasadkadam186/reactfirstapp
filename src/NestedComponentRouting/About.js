
import { Link, Outlet } from "react-router-dom";

function About() {
    return (
        <div>
            <h2>About Component called</h2>
            <br /><br />
            <div className="buttonContainer">
                <div className="companyButtonLink">
                    <button>
                        <Link to="company">Go to Company</Link>
                    </button>
                </div>
                <div className="otherButtonLink">
                    <button>
                        <Link to="other">Go to Other</Link>
                    </button>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
export default About;