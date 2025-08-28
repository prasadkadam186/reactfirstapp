import { useState } from "react";

function Conditionalrendering()
{
    let [user, setUser]=useState(3)
    return (
        <div>
            {/* Condition rendering instead of nested if else */}
            {user === 1 ? <h1>Its user 1</h1> : user === 2 ? <h1>Its user 2</h1> : <h1>its user 3</h1>}
        </div>
    )
}
export default Conditionalrendering;