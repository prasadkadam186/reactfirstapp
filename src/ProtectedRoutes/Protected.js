import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
    const {Component} =props
    let navigate = useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login');
        if(!login)
        {
            navigate('/LoginPage')
        }
    })
    return(
        <div>
            <Component/>
        </div>
    )
}
export default Protected;
