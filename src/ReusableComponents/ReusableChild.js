import { Fragment } from "react";
// Purpose of Fragment : Used for wraping multiple components or elements into one container
function ReusableChild(props)
{
    return(
                <Fragment>
                    <td>{props.data.name}</td>
                    <td>{props.data.price}</td>
                </Fragment>
    )
}
export default ReusableChild;