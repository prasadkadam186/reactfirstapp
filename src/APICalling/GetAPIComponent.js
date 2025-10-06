import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function GetAPIComponent() {
    let getAPIUrl = "https://dev-recruitment-api.huhoka.com/api/College/GetAllColleges";
    let token = "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg0NTc3MjVBMDJGQTgyMUY5RTEyOEI4OTcxMzA2OUNEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2Rldi1zdHMuaHVob2thLmNvbSIsIm5iZiI6MTc1OTczNDQ4NywiaWF0IjoxNzU5NzM0NDg3LCJleHAiOjE3NTk5OTM2ODcsImF1ZCI6Imh0dHBzOi8vZGV2LXN0cy5odWhva2EuY29tL3Jlc291cmNlcyIsInNjb3BlIjpbImFwaTEiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl0sImNsaWVudF9pZCI6InJvLmNsaWVudCIsInN1YiI6IjcxZThhY2JlLWZkMTUtNGRjMC04M2ZhLTg2ZTQ4Y2I1NWU1NSIsImF1dGhfdGltZSI6MTc1OTczNDQ4NywiaWRwIjoibG9jYWwiLCJlbWFpbCI6ImxhdGVzdGh1aG9rYUB5b3BtYWlsLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiSDRQSEtRUERQWkNIWU9OVDZLM1lNT1NTUFY3RkNRRzIiLCJVc2VyVUlkIjoiNzFlOGFjYmUtZmQxNS00ZGMwLTgzZmEtODZlNDhjYjU1ZTU1IiwiVXNlck5hbWUiOiJsYXRlc3RodWhva2FAeW9wbWFpbC5jb20iLCJOYW1lIjoiSXFyYSBJbmFtZGFyIiwiT3JnYW5pemF0aW9uVUlkIjoiNjBhZTE4NDItZjE1Yy00ZDQ3LWFmZjItMjdiMzE1OGU5NTVmIiwiUm9sZSI6IiBvcmctYWRtaW4iLCJSb2xlQ29kZSI6IkNyMzJuSyIsInByZWZlcnJlZF91c2VybmFtZSI6ImxhdGVzdGh1aG9rYUB5b3BtYWlsLmNvbSIsIm5hbWUiOiJsYXRlc3RodWhva2FAeW9wbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImp0aSI6IkQxNDg1RDU5MDZEMkQ0NjhFNTRCQUU4ODJDMjEwNDdGIn0.yC9cVtLzI3G5lB4gMxt-yomalwageivUHzK-vWjaNyVrJHye6aFmlG8cAX_RE0FJpHhjIvp1HltGC_MoAH7Xo2a50znIWtJmfBVK7h3dCXjpA0f0tbP47EG-WP9K2gg_YHCw2fwTVvSrsTXTA63S0bYcaKuA1-L7SomI9Gor2UDUP4Cs1bKFiSI-Dt2RPIcp64rkhHQ5OusvSE3LxbKpzxQBdThgLpIbqxMfHp9PvI8Cq-KKo9rsXYdskU10Jq3MW9wS8cfNUIVBNfTAtIMt_kKmB0Cxmh4v8JrkFFZjyexW-mV6yh08kUuzyXWfkuZEX1Nvd8C5PP4D6n3uhY5dlg"
    let [data, setData] = useState([]);
    let [loader, setLoader] = useState("false");
    let reqObj = {};

    useEffect(() => {
        callgetAPI();
    }, []);
    async function callgetAPI() {
         try {
            setLoader(true);
            const response = await fetch(getAPIUrl, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": token
                },
                body: JSON.stringify({})
            });

            const result = await response.json();
            debugger
            setData(result.data.collegeList);
            console.log(data);
            
        } catch (err) {
            console.error("Error Fetching API", err);
        }
    }
    return (
        <div>
            <h2>Get API calling</h2>
            {/* <button onClick={() => { callgetAPI() }}>View Data</button> */}
            {
                loader ? <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>College ID</th>
                                <th>College Name</th>
                                <th>collegeAddress</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{data.uId}</td>
                                            <td>{data.collegeName}</td>
                                            <td>{data.collegeAddress}</td>
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
