
import { useRef } from 'react'
import FordwardRef from './FordwardRef'
function FordwardRefParentComponent()
{
    let forwardRefInput=useRef(null)
    function updateInputRef()
    {
        forwardRefInput.current.value="Prasad";
        forwardRefInput.current.style.color="Red";
        forwardRefInput.current.focus();
    }
    return(
        <div>
            <div className="fordwardRefparentContainer">
                {/* Use Of Fordward Ref : 
                    - Passing the data from parent to child component via fordward ref
                    - Only use in emergency case 
                */}
                <FordwardRef ref={forwardRefInput}/>
                <button onClick={updateInputRef}>Update Child input via fordwardref</button>
            </div>
        </div>
    )
}
export default FordwardRefParentComponent