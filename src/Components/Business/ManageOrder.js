import TableList from './TableList'
import { thData, tdData, Managefilter } from "./Data";
console.log(tdData)
const ManageOrder = () => {
    const Topic = "Manage Orders"
    return(
        <>
        <TableList h3={Topic} row={thData} col={tdData} open={Managefilter}/>
        </>
 )
} 
export default ManageOrder