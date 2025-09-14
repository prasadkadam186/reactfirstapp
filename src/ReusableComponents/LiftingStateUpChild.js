function LiftingStateUpChild(props)
{
    let name="Prasad Kadam";
    return(
        <div>
            <h1>Data Transfer from Child to Parent Components</h1>
            <button onClick={()=>props.alert(name)}>Send Data</button>
        </div>
    )
}
export default LiftingStateUpChild;