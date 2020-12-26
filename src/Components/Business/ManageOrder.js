import TableList from './TableList'
import { thData, tdData, DropDownInfo } from "./Data";
console.log(tdData)
const ManageOrder = () => {
    const Topic = "Manage Orders"
    return(
        <>
        <TableList h3={Topic} row={thData} col={tdData} open={DropDownInfo}/>
        </>
 )
} 
export default ManageOrder