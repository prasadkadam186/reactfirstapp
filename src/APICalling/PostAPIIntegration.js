import { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

function PostAPIIntegration() {
    // API Endpoints and Token
    const apiUrl = "https://dev-recruitment-api.huhoka.com/api/College/AddCollege";
    let token = "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjBBRkVEQzVBMkU2OUE3NjI5NTZBQUJCMkJBQ0RGQUEzIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2Rldi1zdHMuaHVob2thLmNvbSIsIm5iZiI6MTc1ODE4NjU5NCwiaWF0IjoxNzU4MTg2NTk0LCJleHAiOjE3NTg0NDU3OTQsImF1ZCI6Imh0dHBzOi8vZGV2LXN0cy5odWhva2EuY29tL3Jlc291cmNlcyIsInNjb3BlIjpbImFwaTEiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl0sImNsaWVudF9pZCI6InJvLmNsaWVudCIsInN1YiI6IjcxZThhY2JlLWZkMTUtNGRjMC04M2ZhLTg2ZTQ4Y2I1NWU1NSIsImF1dGhfdGltZSI6MTc1ODE4NjU5NCwiaWRwIjoibG9jYWwiLCJlbWFpbCI6ImxhdGVzdGh1aG9rYUB5b3BtYWlsLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiSDRQSEtRUERQWkNIWU9OVDZLM1lNT1NTUFY3RkNRRzIiLCJVc2VyVUlkIjoiNzFlOGFjYmUtZmQxNS00ZGMwLTgzZmEtODZlNDhjYjU1ZTU1IiwiVXNlck5hbWUiOiJsYXRlc3RodWhva2FAeW9wbWFpbC5jb20iLCJOYW1lIjoiSXFyYSBJbmFtZGFyIiwiT3JnYW5pemF0aW9uVUlkIjoiNjBhZTE4NDItZjE1Yy00ZDQ3LWFmZjItMjdiMzE1OGU5NTVmIiwiUm9sZSI6Im9uZSB0ZXN0dGVzdCIsIlJvbGVDb2RlIjoiWHI1MWlLIiwicHJlZmVycmVkX3VzZXJuYW1lIjoibGF0ZXN0aHVob2thQHlvcG1haWwuY29tIiwibmFtZSI6ImxhdGVzdGh1aG9rYUB5b3BtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwianRpIjoiNDQxMUI1NzZGMEUzOTVGMzUwNjhBNzg5MDdDQTEzNzkifQ.C7Ao4HgSwp80uUEfvJquEGRdN9TvqiipvGisiAHmFSL2KIJzIM5JC2hJ9mfUU6f7wn8ouT8jPYDTi6IthDVOARkc4UyGOwyEs7DqFULTW2z2RcmwQ0C5Z_5j01apeV27qR6KrxMw_pWuRytnr_62FI_b0CmmTPS-ruXhP5yUVQL4ExYsyIO_S5sOtXMMYDR1mX9uvEjtusFwfOsTVxxrYdwxP0qfmTcLEdjrjUoVGtFBO5GqJc5we25X2NInbc47EKgsUMqKDbIXxjA54uD6daQuq9yG1N2Chb2CfRZHZQMUL5CoVU72BdboW3Oog-TAzlRwgZey3Lv4Ql34IPkuzg"
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