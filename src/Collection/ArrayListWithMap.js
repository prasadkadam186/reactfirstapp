import { Table } from 'react-bootstrap'
function ArrayListWithMap() {
    // Use of map with list
    const subjectData = ["Java", "C++", "Angular", "React", "Node", ".net"];
    const studentData = [
        { name: "Rohit", age: "26" },
        { name: "Kunal", age: "20" },
        { name: "Neha", age: "30" },
        { name: "Soham", age: "32" },
    ]
    // For loop not supported inside the return that's why we are using the map for iterting the arraylist..
    // for (let i = 0; i < studentData.length; i++) {
    //     console.log("Student Name : " + studentData[i].name);
    // }
    return (
        <div>
            <h2>Subjects</h2>
            {
                subjectData.map((data, index) => (
                    <h2 key={index}>{data}</h2>
                ))
            }
            <br /><br />
            <div className="SimpleTable">
                <h3>Student Information</h3>
                <table border="1" cellPadding="5" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            studentData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.age}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <br></br>
            <div className="TableWithBootstrap">
                <h3>ArrayList with the bootstrap</h3>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>Sr No</td>
                            <td>Name</td>
                            <td>Age</td>
                        </tr>
                        {
                            studentData.map((data, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.age}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
            <br></br>
            <div className="withFilterCondition">
                <h3>Stuents Names with age more than 30</h3>
                <Table>
                    <tbody>
                        <tr>
                            <td>Sr</td>
                            <td>Name</td>
                            <td>Age</td>
                        </tr>
                        {
                            studentData.map((data,i)=>(
                                data.age>="30" ? <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.age}</td>
                                </tr> : null
                            ))
                        }
                    </tbody>
                </Table>
            </div>

        </div>
    )
}
export default ArrayListWithMap;