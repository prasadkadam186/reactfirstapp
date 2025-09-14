import { forwardRef } from "react";
function FordwardRef(pros, parentRef)
{
    return(
        <div>
            <input type="text" ref={parentRef} />
        </div>
    )
}
export default forwardRef(FordwardRef);