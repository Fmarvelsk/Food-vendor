import { DeliveryTable, driverFilter } from '../Business/Data'
import Table from '../Business/TableList'
import Logo from '../../Image/Group 88@2x.png'
const DriverTable = () => {    
const topic = 'Delivery';
const tdData = [
    ["1", Logo, "Carmen Banks", "2345473856",  "£36,738", "£35.00", "12/10/2020", '3:00pm'],
    ["2",  Logo, "Janice Jackson", "2345473856",  "£23,789", "£35.00", "12/10/2020",'3:00pm'],
    ["3", Logo, "Carmen Reynolds", "2345473856",  "£56,142", "£35.00", "12/10/2020", '3:00pm'],
    ["4",  Logo, "Larry Palmer", "2345473856",  "£38,735", "£35.00", "12/10/2020",'3:00pm'],
    ["5",  Logo, "Jessica Gordon", "2345473856",  "£63,542", "£35.00", "12/10/2020",'3:00pm'],
    ["6",  Logo, "Martha Lee", "2345473856",  "£78,615", "£35.00", "12/10/2020",'3:00pm'], 
    ["7",  Logo, "Dan Hill", "2345473856", "£78,615", "£35.00", "12/10/2020",'3:00pm'],
    ["8",   Logo, "Jeremy Ellis", "2345473856", "£10,615", "£35.00", "12/10/2020",'3:00pm']
  ];
  
    return(
        <Table row={DeliveryTable} col={tdData} h3={topic} open={driverFilter}/>
    )
}
export default DriverTable