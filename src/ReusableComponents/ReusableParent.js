import ReusableChild from './ReusableChild';
import { Table } from 'react-bootstrap';
function ReusableParent() {
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
                            <ReusableChild data={item} key={index} />
                        )
                    }
                </tbody>
            </Table>

        </div>
    )
}
export default ReusableParent;