var dataSales = {
    labels: [
      "9:00AM",
      "12:00AM",
      "3:00PM",
      "6:00PM",
      "9:00PM",
      "12:00PM",
      "3:00AM",
      "6:00AM"
    ],
    series: [
      [287, 385, 490, 492, 554, 586, 698, 695],
      [67, 152, 143, 240, 287, 335, 435, 437],
      [23, 113, 67, 108, 190, 239, 307, 308]
    ]
  };
  const thArray = ["SN", "Order no.", "Email", "Order type", "Amount", "Order status", "Date"];
  const tdArray = [
    ["1",  "2345473856", "DakotaRice@gmail.com", "Multiple", "$36,738", "Confirmed", "12/10/2020"],
    ["2",  "2345473856", "MinervaHooper@gmail.com", "Multiple", "$23,789", "Confirmed", "12/10/2020"],
    ["3",  "2345473856", "SageRodriguez@gmail.com",  "Single", "$56,142", "Pending", "12/10/2020"],
    ["4",   "2345473856", "PhilipChaney@gmail.com",  "Single", "$38,735", "Cancelled", "12/10/2020"],
    ["5",   "2345473856",  "DorisGreene@gmail.com",  "Multiple", "$63,542", "Cancelled", "12/10/2020"],
    ["6",   "2345473856", "MasonPorter@gmail.com", "Single", "$78,615", "Cancelled", "12/10/2020"], 
    ["7",   "2345473856", "Jasonter@gmail.com", "Single", "$78,615", "Confirmed", "12/10/2020"],
    ["8",   "2345473856", "Masoter@gmail.com", "Multiple", "$10,615", "Confirmed", "12/10/2020"]
  ];
  
  var optionsSales = {
    low: 0,
    high: 800,
    showArea: false,
    height: "245px",
    axisX: {
      showGrid: false
    },
    lineSmooth: true,
    showLine: true,
    showPoint: true,
    fullWidth: true,
    chartPadding: {
      right: 50
    }
  };
  var responsiveSales = [
    [
      "screen and (max-width: 640px)",
      {
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ];
  var legendSales = {
    names: ["Open", "Click", "Click Second Time"],
    types: ["info", "danger", "warning"]
  };
  const DropDownInfo = {
    Type : 'Catergories',
    item : [{title:'Soup'},{title: 'Swallow'},{title :'Rice'},{title : 'slides'},{title : 'Bread'},{title : 'Beans'  },{title : 'Others'}] 
  }
  module.exports = {
    responsiveSales,
    legendSales,
    optionsSales,
    dataSales,
    thArray,
    tdArray,
    DropDownInfo
}