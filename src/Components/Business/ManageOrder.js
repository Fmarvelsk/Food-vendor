import TableList from './TableList'
import { thData, tdData, Managefilter } from "./Data";

const ManageOrder = () => {
    const Topic = "Manage Orders";
    const View = "View";
    return(
        <>
        <TableList h3={Topic} link={View} row={thData} col={tdData} open={Managefilter}/>
        </>
 )
} 
export default ManageOrder