import TableList from './TableList'
import { thArray, tdArray, DropDownInfo } from "./Data";

const Transaction = () => {
    const Topic = 'Transaction report'
        return(
        <>
        <TableList h3={Topic} row={thArray} col={tdArray} open={DropDownInfo}/>
        </>
    )
}
export default Transaction