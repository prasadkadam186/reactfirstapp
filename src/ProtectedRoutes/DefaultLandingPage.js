import { useNavigate } from "react-router-dom";

function DefaultLandingPage()
{
    const navigate=useNavigate();
    // Purpose : Navigate to the login page and updating the local storage data
    function goToLogin()
    {
        localStorage.setItem('login',"false");
        navigate('/LoginPage');
    }
    return(
        <div>
            <h2>Default Landing page</h2>
            <button onClick={goToLogin}>Go to login Page</button>
        </div>
    )
}
export default DefaultLandingPage;