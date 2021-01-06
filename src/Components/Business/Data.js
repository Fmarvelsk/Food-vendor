const thArray = ["SN", "Order no.", "Email", "Order type", "Amount", "Order status", "Date", 'Time'];
  const tdArray = [
    ["1",  "2345473856", "DakotaRice@gmail.com", "Multiple", "$36,738", "Sucessful", "12/10/2020", '3:00pm'],
    ["2",  "2345473856", "MinervaHooper@gmail.com", "Multiple", "$23,789", "Sucessful", "12/10/2020",'3:00pm'],
    ["3",  "2345473856", "SageRodriguez@gmail.com",  "Single", "$56,142", "Pending", "12/10/2020", '3:00pm'],
    ["4",   "2345473856", "PhilipChaney@gmail.com",  "Single", "$38,735", "Failed", "12/10/2020",'3:00pm'],
    ["5",   "2345473856",  "DorisGreene@gmail.com",  "Multiple", "$63,542", "Failed", "12/10/2020",'3:00pm'],
    ["6",   "2345473856", "MasonPorter@gmail.com", "Single", "$78,615", "Failed", "12/10/2020",'3:00pm'], 
    ["7",   "2345473856", "Jasonter@gmail.com", "Single", "$78,615", "Confirmed", "12/10/2020",'3:00pm'],
    ["8",   "2345473856", "Masoter@gmail.com", "Multiple", "$10,615", "Confirmed", "12/10/2020",'3:00pm']
  ];
  
  const thData = ["SN", "Order no.", "Email", "Order type", "Amount", "Order status", "Date", 'Time', 'Action' ];
  const tdData = [
    ["1",  "2345473856", "DakotaRice@gmail.com", "Multiple", "$36,738", "Confirmed", "12/10/2020", '3:00pm'],
    ["2",  "2345473856", "MinervaHooper@gmail.com", "Multiple", "$23,789", "Confirmed", "12/10/2020",'3:00pm'],
    ["3",  "2345473856", "SageRodriguez@gmail.com",  "Single", "$56,142", "Waiting", "12/10/2020", '3:00pm'],
    ["4",   "2345473856", "PhilipChaney@gmail.com",  "Single", "$38,735", "Cancelled", "12/10/2020",'3:00pm'],
    ["5",   "2345473856",  "DorisGreene@gmail.com",  "Multiple", "$63,542", "Cancelled", "12/10/2020",'3:00pm'],
    ["6",   "2345473856", "MasonPorter@gmail.com", "Single", "$78,615", "Cancelled", "12/10/2020",'3:00pm'], 
    ["7",   "2345473856", "Jasonter@gmail.com", "Single", "$78,615", "Confirmed", "12/10/2020",'3:00pm'],
    ["8",   "2345473856", "Masoter@gmail.com", "Multiple", "$10,615", "Confirmed", "12/10/2020",'3:00pm']
  ];
  
  const SuspendMenu = [{
    Type : 'Catergories',
    item : [{title:'Soup'},{title: 'Swallow'},{title :'Rice'},{title : 'slides'},{title : 'Bread'},{title : 'Beans'  },{title : 'Others'}] 
  },

  {
    Type : 'Status',
    item : [{title : 'Suspended'}, {title : 'Active'}]
  }
]

  const DropDownInfo =[{
    Type : 'Catergories',
    item : [{title:'Soup'},{title: 'Swallow'},{title :'Rice'},{title : 'slides'},{title : 'Bread'},{title : 'Beans'  },{title : 'Others'}] 
  },
  {
    Type : 'Date',
    item : [{title:'24 hours'},{title: '2 days'},{title :'1 week'},{title : '1 months'},{title : '3 month'}] 
  },
{
  Type : 'Status',
  item : [{title : 'Successful'}, {title : 'Pending'}, {title : 'Failed'}]
}
]

const driverFilter =[{
  Type : 'Merchant',
  item : [{title:'Soup'},{title: 'Swallow'},{title :'Rice'},{title : 'slides'},{title : 'Bread'},{title : 'Beans'},{title : 'Others'}] 
},
{
  Type : 'Date',
  item : [{title:'24 hours'},{title: '2 days'},{title :'1 week'},{title : '1 months'},{title : '3 month'}] 
}
]
const managerData = [3910, 3706, 2850, 4005, 3750, 2912, 3200, 3645, 4205, 3211, 3354, 4000];

const yearLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Popular = ["Efo Riro", "Egusi Soup", "Bangana Soup", "Jollof Rice", "Fried Rice"]

const DeliveryTable = ["SN", "", "Merchant", "Order no.", "Earning", "Tips", "Date", 'Time']


const Menu = [{
  id :1,
  menu :"Efo Riro"},
  {
    id : 2,
    menu : "Egusi Soup"},
    { id : 3, 
      menu : "Bangana Soup"},
      { id : 4,
        menu : "Jollof Rice"},
        { id : 5,
          menu :"Fried Rice"}
        ]


const Managefilter = [{
Type : 'Order type',
item : [{title: "Single"}, {title : "Mutiple"}]
},
{
  Type : 'Date',
  item:[{title:'24 hours'},{title: '2 days'},{title :'1 week'},{title : '1 months'},{title : '3 month'}]
},
{
  Type : 'Status',
  item : [{title : 'Confirmed'}, {title : 'Waiting'}, {title : 'Cancelled'}]
}]

const dashTopic = { h3:"Overview", span:'Heritage Kitchen restaurant'}
const driveTopic = { h3:"Dashboard", span:'Your' }

const StatsNumber = [{
  statsText :"Orders",
  statsValue:"£35,485",
  statsInfo:"+2.8%"
},
{
  statsText:"Avg.Order amount",
  statsValue:"£31,345",
  statsInfo:"-2.8%"
            
},
{statsText:"Unique customer",
statsValue:"£33,785",
statsInfo:"+2.8%"
},
{
  statsText:"Net Sales",
              statsValue:"£35,485",
              statsInfo:"+2.8%"
}

]

const driverStats = [{
  statsText :"Total Earnings",
  statsValue:"£35,485",
  statsInfo:"+2.8%"
},
{
  statsText:"Total Withdraw",
  statsValue:"£31,345",
  statsInfo:"-2.8%"
            
},
{statsText:"Total Delivery",
statsValue:"£33,785",
statsInfo:"+2.8%"
},
{
  statsText:"Available Balance",
  statsValue:"£35,485",
  statsInfo:"+2.8%"
}

]



const Maplocations = [
  {
    name: "Location 1",
    location: { 
      lat: 41.3954,
      lng: 2.162 
    },
  },
  {
    name: "Location 2",
    location: { 
      lat: 41.3917,
      lng: 2.1649
    },
  },
  {
    name: "Location 3",
    location: { 
      lat: 41.3773,
      lng: 2.1585
    },
  },
  {
    name: "Location 4",
    location: { 
      lat: 41.3797,
      lng: 2.1682
    },
  },
  {
    name: "Location 5",
    location: { 
      lat: 41.4055,
      lng: 2.1915
    },
  }
];

  module.exports = {
    managerData,
    yearLabels,
    thArray,
    tdArray,
    tdData,
    thData,
    Menu,
    SuspendMenu,
    DropDownInfo,
    Managefilter,
    Popular,
    StatsNumber,
    dashTopic,
    driveTopic,
    driverStats,
    driverFilter,
    DeliveryTable,
    Maplocations
  }