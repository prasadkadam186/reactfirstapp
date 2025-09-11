import ReusableChild from './ReusableChild';
import { Table } from 'react-bootstrap';
import LiftingStateUpChild from './LiftingStateUpChild';
function ReusableParent() {
    function showData(data)
    {
        alert("Hey "+data+" Called Parent Function");
    }
    let listData = [
        { name: "book", price: "100$" },
        { name: "NoteBook", price: "250$" },
        { name: "Novel", price: "300$" },
        { name: "Literature", price: "500$" },
    ]
    return (
        <div>
            <Table variant='dark'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {/* Resuing the reusableChild component via map */}
                    {
                        listData.map((item,index) =>
                            <tr key={index}>
                                <ReusableChild data={item} key={index} />
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <div className="DataCommunicationViaLiftingStateUp">
                <LiftingStateUpChild alert={showData}/>
            </div>


        </div>
    )
}
export default ReusableParent;