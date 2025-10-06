import { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

function PostAPIIntegration() {
    // API Endpoints and Token
    const apiUrl = "https://dev-recruitment-api.huhoka.com/api/College/AddCollege";
    let token = "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg0NTc3MjVBMDJGQTgyMUY5RTEyOEI4OTcxMzA2OUNEIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2Rldi1zdHMuaHVob2thLmNvbSIsIm5iZiI6MTc1OTczNDQ4NywiaWF0IjoxNzU5NzM0NDg3LCJleHAiOjE3NTk5OTM2ODcsImF1ZCI6Imh0dHBzOi8vZGV2LXN0cy5odWhva2EuY29tL3Jlc291cmNlcyIsInNjb3BlIjpbImFwaTEiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl0sImNsaWVudF9pZCI6InJvLmNsaWVudCIsInN1YiI6IjcxZThhY2JlLWZkMTUtNGRjMC04M2ZhLTg2ZTQ4Y2I1NWU1NSIsImF1dGhfdGltZSI6MTc1OTczNDQ4NywiaWRwIjoibG9jYWwiLCJlbWFpbCI6ImxhdGVzdGh1aG9rYUB5b3BtYWlsLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiSDRQSEtRUERQWkNIWU9OVDZLM1lNT1NTUFY3RkNRRzIiLCJVc2VyVUlkIjoiNzFlOGFjYmUtZmQxNS00ZGMwLTgzZmEtODZlNDhjYjU1ZTU1IiwiVXNlck5hbWUiOiJsYXRlc3RodWhva2FAeW9wbWFpbC5jb20iLCJOYW1lIjoiSXFyYSBJbmFtZGFyIiwiT3JnYW5pemF0aW9uVUlkIjoiNjBhZTE4NDItZjE1Yy00ZDQ3LWFmZjItMjdiMzE1OGU5NTVmIiwiUm9sZSI6IiBvcmctYWRtaW4iLCJSb2xlQ29kZSI6IkNyMzJuSyIsInByZWZlcnJlZF91c2VybmFtZSI6ImxhdGVzdGh1aG9rYUB5b3BtYWlsLmNvbSIsIm5hbWUiOiJsYXRlc3RodWhva2FAeW9wbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImp0aSI6IkQxNDg1RDU5MDZEMkQ0NjhFNTRCQUU4ODJDMjEwNDdGIn0.yC9cVtLzI3G5lB4gMxt-yomalwageivUHzK-vWjaNyVrJHye6aFmlG8cAX_RE0FJpHhjIvp1HltGC_MoAH7Xo2a50znIWtJmfBVK7h3dCXjpA0f0tbP47EG-WP9K2gg_YHCw2fwTVvSrsTXTA63S0bYcaKuA1-L7SomI9Gor2UDUP4Cs1bKFiSI-Dt2RPIcp64rkhHQ5OusvSE3LxbKpzxQBdThgLpIbqxMfHp9PvI8Cq-KKo9rsXYdskU10Jq3MW9wS8cfNUIVBNfTAtIMt_kKmB0Cxmh4v8JrkFFZjyexW-mV6yh08kUuzyXWfkuZEX1Nvd8C5PP4D6n3uhY5dlg"
    // States as per form inputs
    const [uId, setUid] = useState("");
    const [organizationUId, setOrgId] = useState("");
    const [collegeName, setClgName] = useState("");
    const [collegeAddress, setAddress] = useState("");

    // Function call on submit button
    function onsubmit() {
        let reqObj = { uId, organizationUId, collegeName, collegeAddress };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(reqObj)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                if (resp.statusCode === 200) {
                    alert(resp.message);
                }
                else {
                    alert(resp.error);
                }
            })
        })

    }
    return (
        <div>
            <Card>
                <Card.Header>
                    <h2>Post API integration</h2>
                </Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <footer>
                            <input type="text" value={uId} onChange={(e) => setUid(e.target.value)} placeholder="uId" /><br /><br />
                            <input type="text" value={organizationUId} onChange={(e) => setOrgId(e.target.value)} placeholder="organizationUId" /><br /><br />
                            <input type="text" value={collegeName} onChange={(e) => setClgName(e.target.value)} placeholder="collegeName" /><br /><br />
                            <input type="text" value={collegeAddress} onChange={(e) => setAddress(e.target.value)} placeholder="collegeAddress" /><br /><br />
                            <Button onClick={onsubmit}>Submit</Button>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    )
}
export default PostAPIIntegration;