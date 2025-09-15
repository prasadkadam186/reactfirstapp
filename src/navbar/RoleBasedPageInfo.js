import { useParams } from "react-router-dom";

function RoleBasedPageInfo()
{
    const params = useParams();
    const {name}=params
    return(
        <div>
            <h2>Hey {name} user Welcome! </h2>
            <br/> <br/>
            <h6>Use of Params :</h6>
            <span>Params is used to send and get the data from the URL and as per that data we can show the result on UI</span>
        </div>
    )
}
export default RoleBasedPageInfo;