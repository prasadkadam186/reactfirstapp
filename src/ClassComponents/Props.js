// Props with functional components
function Props(props)
{
    console.log(props);
    
    return(
        <div>
            <div>
                {props.name}
            </div>
        </div>
    );
}
export default Props;