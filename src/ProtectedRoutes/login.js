import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage()
{
    const navigate=useNavigate();
    // Below hook call at firstly
    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(login ==='true')
        {
            navigate('/');
        }},[navigate])

    // Purpose : To update the local storage valus and navigate to another component
    function loginForm(e)
    {
        e.preventDefault();  // prevent form refresh
        localStorage.setItem('login',"true");
        navigate('/');
        alert("Login Sucessfully! ");
       
    }
   
    return(
        <div>
            <div className="loginForm">
                <div className="title">
                    <h2>Login Form</h2>
                </div>
                <div>
                    <form onSubmit={loginForm}>
                        <input type="text"/> <br/><br/>
                        <input type="text"/> <br/><br/>
                        <button type="submit" >Submit</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}
export default LoginPage;