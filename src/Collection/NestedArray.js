import { Table } from 'react-bootstrap'
function NestedArray() {
    const personData = [
        {
            name: "Greek", age: "34", address: [
                { city: "Lansing", state: "Michigan", zipCode: "48933" },
                { city: "Kansas City", state: "Iowa", zipCode: "64106" },
                { city: "Guy", state: "Texas", zipCode: "77444" }
            ]
        },
        {
            name: "David", age: "54", address: [
                { city: "Oakland", state: "California", zipCode: "94612" }
            ]
        },
        {
            name: "Mike", age: "44", address: [
                { city: "East Troy", state: "California", zipCode: "98912" },
                { city: "Anaheim", state: "California", zipCode: "45874" },
            ]
        },
        {
            name: "Steve", age: "39", address: [
                { city: "Farmington Hills", state: "Michigan", zipCode: "48335" }
            ]
        }

    ]
    return (
        <div className="nestedArrayWithNestedMap">
            <h2>NestedArrayWithNestedMap</h2>
            {/* UI Code for personData array */}
            <Table variant='dark' striped >
                <tbody>
                    <tr>
                        <th>Sr No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    {
                        personData.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>
                                    {/* For Address array  */}
                                    <Table variant='dark' striped>
                                        <tbody>
                                            <tr>
                                                <th>City</th>
                                                <th>State</th>
                                                <th>Zip Code</th>
                                            </tr>
                                            {
                                                item.address.map((result,index) => (
                                                    <tr key={index}>
                                                        <td>{result.city}</td>
                                                        <td>{result.state}</td>
                                                        <td>{result.zipCode}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </Table>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default NestedArray;