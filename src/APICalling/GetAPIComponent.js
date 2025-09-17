import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function GetAPIComponent() {
    let getAPIUrl = "https://dummy-json.mock.beeceptor.com/companies";
    let [data, setData] = useState([]);
    let [loader, setLoader] = useState("false");
    // useEffect(() => {
    //     callgetAPI();
    // }, []);
    function callgetAPI() {
        setLoader('true');
        fetch(getAPIUrl)
            .then((result) => result.json())
            .then((res) => {
                setData(res)
            })
            .catch((err) => console.error("Error Fetching API", err))
        console.log(data)
    }
    return (
        <div>
            <h2>Get API calling</h2>
            <button onClick={() => { callgetAPI() }}>View Data</button>
            {
                loader ? <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{data.id}</td>
                                            <td>{data.name}</td>
                                            <td>{data.address}</td>
                                            <td>{data.country}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div> : ""
            }

        </div>
    )
}
export default GetAPIComponent;
