  const thArray = ["SN", "Order no.", "Email", "Order type", "Amount", "Order status", "Date", 'Time'];
  const tdArray = [
    ["1",  "2345473856", "DakotaRice@gmail.com", "Multiple", "$36,738", "Confirmed", "12/10/2020", '3:00pm'],
    ["2",  "2345473856", "MinervaHooper@gmail.com", "Multiple", "$23,789", "Confirmed", "12/10/2020",'3:00pm'],
    ["3",  "2345473856", "SageRodriguez@gmail.com",  "Single", "$56,142", "Pending", "12/10/2020", '3:00pm'],
    ["4",   "2345473856", "PhilipChaney@gmail.com",  "Single", "$38,735", "Cancelled", "12/10/2020",'3:00pm'],
    ["5",   "2345473856",  "DorisGreene@gmail.com",  "Multiple", "$63,542", "Cancelled", "12/10/2020",'3:00pm'],
    ["6",   "2345473856", "MasonPorter@gmail.com", "Single", "$78,615", "Cancelled", "12/10/2020",'3:00pm'], 
    ["7",   "2345473856", "Jasonter@gmail.com", "Single", "$78,615", "Confirmed", "12/10/2020",'3:00pm'],
    ["8",   "2345473856", "Masoter@gmail.com", "Multiple", "$10,615", "Confirmed", "12/10/2020",'3:00pm']
  ];
  
  const thData = ["SN", "Order no.", "Email", "Order type", "Amount", "Order status", "Date", 'Time', 'Action' ];
  const tdData = [
    ["1",  "2345473856", "DakotaRice@gmail.com", "Multiple", "$36,738", "Confirmed", "12/10/2020", '3:00pm', 'View'],
    ["2",  "2345473856", "MinervaHooper@gmail.com", "Multiple", "$23,789", "Confirmed", "12/10/2020",'3:00pm', 'View'],
    ["3",  "2345473856", "SageRodriguez@gmail.com",  "Single", "$56,142", "Pending", "12/10/2020", '3:00pm', 'View'],
    ["4",   "2345473856", "PhilipChaney@gmail.com",  "Single", "$38,735", "Cancelled", "12/10/2020",'3:00pm', 'View'],
    ["5",   "2345473856",  "DorisGreene@gmail.com",  "Multiple", "$63,542", "Cancelled", "12/10/2020",'3:00pm', 'View'],
    ["6",   "2345473856", "MasonPorter@gmail.com", "Single", "$78,615", "Cancelled", "12/10/2020",'3:00pm', 'View'], 
    ["7",   "2345473856", "Jasonter@gmail.com", "Single", "$78,615", "Confirmed", "12/10/2020",'3:00pm', 'View'],
    ["8",   "2345473856", "Masoter@gmail.com", "Multiple", "$10,615", "Confirmed", "12/10/2020",'3:00pm', 'View']
  ];
  
  const DropDownInfo =[{
    Type : 'Catergories',
    item : [{title:'Soup'},{title: 'Swallow'},{title :'Rice'},{title : 'slides'},{title : 'Bread'},{title : 'Beans'  },{title : 'Others'}] 
  },
  {
    Type : 'Date',
    item : [{title:'24 hours'},{title: '2 days'},{title :'1 week'},{title : '1 months'},{title : '3 month'}] 
  },
]
const managerData = [
  3910, 3706, 2850, 4005, 3750, 2912, 3200, 3645, 4205, 3211, 3354, 4000
];
const yearLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Popular = ["Efo Riro", "Egusi Soup", "Bangana Soup", "Jollof Rice", "Fried Rice"]

  module.exports = {
    managerData,
    yearLabels,
    thArray,
    tdArray,
    tdData,
    thData,
    DropDownInfo,
    Popular
}