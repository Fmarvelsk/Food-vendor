import TableList from './TableList'
import { thData, Managefilter } from "./Data";
import {useSelector} from 'react-redux'

const ManageOrder = () => {
    const Topic = "Manage Orders";
    const View = "View";
    const filter = useSelector((state) => state.filterStore)
    return(
        <>
        <TableList h3={Topic} link={View} row={thData} col={filter.data} open={Managefilter}/>
        </>
 )
} 
export default ManageOrder