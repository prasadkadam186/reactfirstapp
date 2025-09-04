import React,{useEffect} from "react"
function UseEffectWithConditionForPropsChild(props)
{
    // Below useEffect hook called only on updation of count props.
    useEffect(()=>{
        alert("UseEffectCalled for count")
    },[props.count])
    return(
        <div>
            UseEffectWithConditionForPropsChild works
        </div>
    )
}
export default UseEffectWithConditionForPropsChild;