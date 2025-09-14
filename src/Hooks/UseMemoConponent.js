import { useMemo, useState } from "react";
import { Button } from "react-bootstrap";

function UserMemoComponent() {
    let [count, setCount] = useState(0);
    let [index, setIndex] = useState(10);
    //  Purpose of Use Memo : useMemo is used to prevent the unnecessary rendering or reloading of components
    // below memo will called only when the count state updated
    const mulCountMemo = useMemo(
        function multiplyCountVar() {
            alert("multiplyCountVar function called")
            return count * 5;
        },[count])

    return (
        <div>
            <h2>UserMemoComponent Called</h2>
            <br></br>
            <h4>Count Value = {count}</h4>
            <br></br>
            <h4>Index Value = {index}</h4>
            <br></br>
            <h3>{mulCountMemo}</h3>
            <Button variant="outline-success" onClick={() => setCount(count + 1)}>Increase Count</Button>
            <Button variant="outline-success" onClick={() => setIndex(index + 10)}>Increase Index</Button>
        </div>
    )
}
export default UserMemoComponent;