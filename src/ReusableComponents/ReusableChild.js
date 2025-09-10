
function ReusableChild(props)
{
    return(
                <tr>
                    <td>{props.data.name}</td>
                    <td>{props.data.price}</td>
                </tr>
    )
}
export default ReusableChild;