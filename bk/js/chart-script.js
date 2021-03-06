/* Line Chart */

$("#linechart-container").insertFusionCharts({
    type: "line",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "",
        yaxisname: "Effected Person",
        subcaption: "",
        numbersuffix: " ",
        rotatelabels: "1",
        setadaptiveymin: "1",
        theme: "fusion"
      },
      data: [
        {
          label: "30 Jan 2020",
          value: "0"
        },
        {
          label: "02 Feb 2020",
          value: "50"
        },
        {
          label: "03 Mar 2020",
          value: "100"
        },
        {
          label: "05 Mar 2020",
          value: "150"
        },
        {
          label: "07 Mar 2020",
          value: "200"
        },
        {
          label: "09 Mar 2020",
          value: "250"
        },
        {
          label: "11 Mar 2020",
          value: "300"
        },
        {
          label: "13 Mar 2020",
          value: "350"
        },
        {
          label: "15 Mar 2020",
          value: "400"
        },
        {
          label: "17 Mar 2020",
          value: "450"
        },
        {
          label: "19 Mar 2020",
          value: "500"
        },
        {
          label: "22 Mar 2020",
          value: "550"
        }
      ]
    }
  });

/* Bar Chart */


//STEP 2 - Chart Data
const chartData = [{
    "label": "Maharastha",
    "value": "290"
}, {
    "label": "UP",
    "value": "260"
}, {
    "label": "Delhi",
    "value": "180"
}, {
    "label": "Kerala",
    "value": "140"
}, {
    "label": "Bihar",
    "value": "115"
}, {
    "label": "Haryana",
    "value": "100"
}, {
    "label": "Gujarat",
    "value": "30"
}, {
    "label": "UP",
    "value": "260"
}, {
    "label": "Delhi",
    "value": "180"
}, {
    "label": "Kerala",
    "value": "140"
}, {
    "label": "Bihar",
    "value": "115"
}, {
    "label": "Haryana",
    "value": "100"
}, {
    "label": "Gujarat",
    "value": "30"
}, {
    "label": "Rajasthan",
    "value": "30"
}];

//STEP 3 - Chart Configurations
const chartConfig = {
type: 'column2d',
renderAt: 'chart-container',
width: '100%',
height: '400',
dataFormat: 'json',
dataSource: {
    // Chart Configuration
    "chart": {
        "caption": "",
        "subCaption": "",
        "xAxisName": "State",
        "yAxisName": "Effected Person",
        "numberSuffix": "",
        "theme": "fusion",
        },
    // Chart Data
    "data": chartData
    }
};
FusionCharts.ready(function(){
var fusioncharts = new FusionCharts(chartConfig);
fusioncharts.render();
});






/* Pie Chart */

$("#piechart-container").insertFusionCharts({
    type: "pie2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "",
        plottooltext: "<b>$percentValue</b> Patients",
        showlegend: "1",
        showpercentvalues: "1",
        legendposition: "bottom",
        usedataplotcolorforlabels: "1",
        theme: "fusion"
      },
      data: [
        {
          label: "Indian",
          value: "296"
        },
        {
          label: "Foreigner",
          value: "41"
        }
      ]
    }
  });
  




  /* Double bar Chart */


  $("#doublechart-container").insertFusionCharts({
    type: "scrollstackedcolumn2d",
    width: "100%",
    height: "600",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "",
        yaxisname: "",
        subcaption: "",
        flatscrollbars: "0",
        scrollheight: "12",
        numvisibleplot: "8",
        plottooltext:
          "<b>$dataValue</b> people $seriesName in $label",
        theme: "fusion"
      },
      categories: [
        {
          category: [
            {
              label: "26 Feb 2020"
            },
            {
              label: "02 Mar 2020"
            },
            {
              label: "06 Mar 2020"
            },
            {
              label: "10 Mar 2020"
            },
            {
              label: "14 Mar 2020"
            },
            {
              label: "18 Mar 2020"
            },
            {
              label: "22 Mar 2020"
            }
          ]
        }
      ],
      dataset: [
        {
          seriesname: "Hospitalized",
          data: [
            {
              value: "10"
            },
            {
              value: "20"
            },
            {
              value: "40"
            },
            {
              value: "60"
            },
            {
              value: "80"
            },
            {
              value: "100"
            },
            {
              value: "120"
            },
            {
              value: "140"
            },
            {
              value: "160"
            },
            {
              value: "180"
            },
            {
              value: "200"
            },
            {
              value: "220"
            },
            {
              value: "240"
            },
            {
              value: "260"
            },
            {
              value: "280"
            },
            {
              value: "300"
            },
            {
              value: "320"
            },
            {
              value: "340"
            },
            {
              value: "360"
            },
            {
              value: "380"
            },
            {
              value: "400"
            },
            {
              value: "420"
            },
            {
              value: "440"
            },
            {
              value: "460"
            }
          ]
        },
        {
          seriesname: "Recovered",
          data: [
            {
              value: "5"
            },
            {
              value: "10"
            },
            {
              value: "15"
            },
            {
              value: "20"
            },
            {
              value: "25"
            },
            {
              value: "30"
            },
            {
              value: "35"
            },
            {
              value: "40"
            },
            {
              value: "45"
            },
            {
              value: "50"
            },
            {
              value: "55"
            },
            {
              value: "60"
            },
            {
              value: "65"
            },
            {
              value: "70"
            },
            {
              value: "75"
            },
            {
              value: "80"
            },
            {
              value: "85"
            },
            {
              value: "90"
            },
            {
              value: "95"
            },
            {
              value: "100"
            },
            {
              value: "105"
            },
            {
              value: "110"
            },
            {
              value: "115"
            },
            {
              value: "120"
            }
          ]
        }
      ]
    }
  });
  


  /* State Wise Map */

  FusionCharts.ready(function() {
    var salesMap = new FusionCharts({
      type: 'maps/india',
      renderAt: 'indiachart-container',
      width: '100%',
      height: '600',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "",
          "subcaption": "",
          "entityFillHoverColor": "#cccccc",
          "numberPrefix": "",
          "showLabels": "1",
          "theme": "fusion"
        },
        "colorrange": {
          "minvalue": "0",
          "startlabel": "",
          "endlabel": "",
          "code": "#FFFFFF",
          "gradient": "1",
          "color": [{
            "maxvalue": "",
            "displayvalue": "",
            "code": "#29c3be"
          }, {
            "maxvalue": "100",
            "code": "#5d62b5"
          }]
        },
        "data": [{
          "id": "001",
          "value": "1"
        }, {
          "id": "002",
          "value": "0"
        }, {
          "id": "003",
          "value": "3"
        }, {
          "id": "004",
          "value": "4"
        }, {
          "id": "005",
          "value": "5"
        }, {
          "id": "006",
          "value": "6"
        }, {
          "id": "007",
          "value": "7"
        }, {
          "id": "008",
          "value": "8"
        }, {
          "id": "009",
          "value": "9"
        }, {
          "id": "010",
          "value": "10"
        }, {
          "id": "011",
          "value": "11"
        }, {
          "id": "012",
          "value": "12"
        }, {
          "id": "013",
          "value": "13"
        }, {
          "id": "014",
          "value": "14"
        }, {
          "id": "015",
          "value": "15"
        }, {
          "id": "016",
          "value": "16"
        }, {
          "id": "017",
          "value": "17"
        }, {
          "id": "018",
          "value": "55"
        }, {
          "id": "019",
          "value": "19"
        }, {
          "id": "020",
          "value": "20"
        }, {
          "id": "021",
          "value": "75"
        }, {
          "id": "022",
          "value": "22"
        }, {
          "id": "023",
          "value": "23"
        }, {
          "id": "024",
          "value": "24"
        }, {
          "id": "025",
          "value": "25"
        }, {
          "id": "026",
          "value": "26"
        }, {
          "id": "027",
          "value": "27"
        }, {
          "id": "028",
          "value": "28"
        }, {
          "id": "029",
          "value": "29"
        }, {
          "id": "030",
          "value": "30"
        }, {
          "id": "031",
          "value": "31"
        }, {
          "id": "032",
          "value": "32"
        }, {
          "id": "033",
          "value": "33"
        }, {
          "id": "034",
          "value": "34"
        }, {
          "id": "035",
          "value": "35"
        }, {
          "id": "036",
          "value": "36"
        }]
      },
    }).render();
  });
  




  /* world map Chart */



  FusionCharts.ready(function() {
    var chart = new FusionCharts({
      type: 'maps/worldwithcountries',
      renderAt: 'mapchart-container',
      width: '100%',
      height: '500',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "animation": "0",
          "showbevel": "0",
          "usehovercolor": "1",
          "canvasbordercolor": "FFFFFF",
          "bordercolor": "FFFFFF",
          "showlegend": "1",
          "showshadow": "0",
          "legendposition": "BOTTOM",
          "legendborderalpha": "0",
          "legendbordercolor": "ffffff",
          "legendallowdrag": "0",
          "legendshadow": "0",
          "caption": "",
          "connectorcolor": "000000",
          "fillalpha": "80",
          "hovercolor": "CCCCCC",
          "showborder": "0",
          "showLabels": "0",
          "numberSuffix": ""
        },
         //Defining color range for data range
        "colorrange": {
          "color": [{
              "minvalue": "0",
              "maxvalue": "2500",
              "displayvalue": "Low",
              "code": "#bcbff1"
            },
            {
              "minvalue": "2500",
              "maxvalue": "5000",
              "displayvalue": "High",
              "code": "#555bb8"
            }
          ]
        },
        "data": [{
          "id": "01",
          "value": 2696
        }, {
          "id": "02",
          "value": 2050
        }, {
          "id": "03",
          "value": 271
        }, {
          "id": "04",
          "value": 596
        }, {
          "id": "05",
          "value": 599
        }, {
          "id": "06",
          "value": 1427
        }, {
          "id": "07",
          "value": 787
        }, {
          "id": "08",
          "value": 1151
        }, {
          "id": "09",
          "value": 912
        }, {
          "id": "10",
          "value": 2078
        }, {
          "id": "11",
          "value": 2068
        }, {
          "id": "12",
          "value": 1743
        }, {
          "id": "13",
          "value": 2016
        }, {
          "id": "14",
          "value": 2721
        }, {
          "id": "15",
          "value": 2672
        }, {
          "id": "16",
          "value": 3012
        }, {
          "id": "17",
          "value": 2341
        }, {
          "id": "18",
          "value": 563
        }, {
          "id": "19",
          "value": 2346
        }, {
          "id": "20",
          "value": 2968
        }, {
          "id": "21",
          "value": 1947
        }, {
          "id": "22",
          "value": 4439
        }, {
          "id": "23",
          "value": 1761
        }, {
          "id": "24",
          "value": 2251
        }, {
          "id": "25",
          "value": 1997
        }, {
          "id": "26",
          "value": 503
        }, {
          "id": "27",
          "value": 4257
        }, {
          "id": "28",
          "value": 941
        }, {
          "id": "29",
          "value": 2486
        }, {
          "id": "30",
          "value": 3705
        }, {
          "id": "31",
          "value": 4527
        }, {
          "id": "32",
          "value": 1432
        }, {
          "id": "33",
          "value": 1221
        }, {
          "id": "34",
          "value": 2988
        }, {
          "id": "35",
          "value": 3200
        }, {
          "id": "36",
          "value": 2319
        }, {
          "id": "37",
          "value": 1278
        }, {
          "id": "38",
          "value": 3026
        }, {
          "id": "39",
          "value": 139
        }, {
          "id": "40",
          "value": 3857
        }, {
          "id": "41",
          "value": 3370
        }, {
          "id": "42",
          "value": 1137
        }, {
          "id": "43",
          "value": 3116
        }, {
          "id": "44",
          "value": 3915
        }, {
          "id": "45",
          "value": 2199
        }, {
          "id": "46",
          "value": 242
        }, {
          "id": "47",
          "value": 524
        }, {
          "id": "48",
          "value": 2208
        }, {
          "id": "49",
          "value": 2059
        }, {
          "id": "50",
          "value": 3720
        }, {
          "id": "51",
          "value": 2091
        }, {
          "id": "52",
          "value": 816
        }, {
          "id": "53",
          "value": 2401
        }, {
          "id": "54",
          "value": 1463
        }, {
          "id": "55",
          "value": 1548
        }, {
          "id": "56",
          "value": 642
        }, {
          "id": "57",
          "value": 1606
        }, {
          "id": "58",
          "value": 2987
        }, {
          "id": "59",
          "value": 178
        }, {
          "id": "60",
          "value": 3176
        }, {
          "id": "61",
          "value": 4382
        }, {
          "id": "62",
          "value": 1486
        }, {
          "id": "63",
          "value": 2713
        }, {
          "id": "64",
          "value": 1736
        }, {
          "id": "65",
          "value": 731
        }, {
          "id": "66",
          "value": 3847
        }, {
          "id": "67",
          "value": 3120
        }, {
          "id": "68",
          "value": 1063
        }, {
          "id": "69",
          "value": 365
        }, {
          "id": "70",
          "value": 2954
        }, {
          "id": "71",
          "value": 2078
        }, {
          "id": "72",
          "value": 505
        }, {
          "id": "73",
          "value": 3910
        }, {
          "id": "74",
          "value": 2345
        }, {
          "id": "75",
          "value": 234
        }, {
          "id": "76",
          "value": 3881
        }, {
          "id": "77",
          "value": 4284
        }, {
          "id": "78",
          "value": 2686
        }, {
          "id": "79",
          "value": 4055
        }, {
          "id": "80",
          "value": 791
        }, {
          "id": "81",
          "value": 2971
        }, {
          "id": "82",
          "value": 211
        }, {
          "id": "83",
          "value": 3963
        }, {
          "id": "84",
          "value": 325
        }, {
          "id": "85",
          "value": 2199
        }, {
          "id": "86",
          "value": 2040
        }, {
          "id": "87",
          "value": 4070
        }, {
          "id": "88",
          "value": 288
        }, {
          "id": "89",
          "value": 4049
        }, {
          "id": "90",
          "value": 2117
        }, {
          "id": "91",
          "value": 259
        }, {
          "id": "92",
          "value": 2867
        }, {
          "id": "93",
          "value": 1861
        }, {
          "id": "94",
          "value": 2682
        }, {
          "id": "95",
          "value": 1851
        }, {
          "id": "96",
          "value": 3908
        }, {
          "id": "97",
          "value": 1843
        }, {
          "id": "98",
          "value": 1390
        }, {
          "id": "99",
          "value": 1686
        }, {
          "id": "100",
          "value": 2735
        }, {
          "id": "101",
          "value": 4058
        }, {
          "id": "102",
          "value": 870
        }, {
          "id": "103",
          "value": 1807
        }, {
          "id": "104",
          "value": 1
        }, {
          "id": "105",
          "value": 2331
        }, {
          "id": "106",
          "value": 3987
        }, {
          "id": "107",
          "value": 3808
        }, {
          "id": "108",
          "value": 4497
        }, {
          "id": "109",
          "value": 3674
        }, {
          "id": "110",
          "value": 2736
        }, {
          "id": "111",
          "value": 2440
        }, {
          "id": "112",
          "value": 1406
        }, {
          "id": "113",
          "value": 2623
        }, {
          "id": "114",
          "value": 2864
        }, {
          "id": "115",
          "value": 3439
        }, {
          "id": "116",
          "value": 3374
        }, {
          "id": "117",
          "value": 225
        }, {
          "id": "118",
          "value": 3001
        }, {
          "id": "119",
          "value": 3398
        }, {
          "id": "120",
          "value": 416
        }, {
          "id": "121",
          "value": 4030
        }, {
          "id": "122",
          "value": 3643
        }, {
          "id": "123",
          "value": 1348
        }, {
          "id": "124",
          "value": 1385
        }, {
          "id": "125",
          "value": 2622
        }, {
          "id": "126",
          "value": 3890
        }, {
          "id": "127",
          "value": 3379
        }, {
          "id": "128",
          "value": 615
        }, {
          "id": "129",
          "value": 1479
        }, {
          "id": "130",
          "value": 1038
        }, {
          "id": "131",
          "value": 536
        }, {
          "id": "132",
          "value": 3085
        }, {
          "id": "133",
          "value": 3950
        }, {
          "id": "134",
          "value": 1120
        }, {
          "id": "135",
          "value": 4458
        }, {
          "id": "136",
          "value": 1675
        }, {
          "id": "137",
          "value": 230
        }, {
          "id": "138",
          "value": 3722
        }, {
          "id": "139",
          "value": 4301
        }, {
          "id": "140",
          "value": 1791
        }, {
          "id": "141",
          "value": 1165
        }, {
          "id": "142",
          "value": 4045
        }, {
          "id": "143",
          "value": 1325
        }, {
          "id": "144",
          "value": 4357
        }, {
          "id": "145",
          "value": 3838
        }, {
          "id": "146",
          "value": 1098
        }, {
          "id": "147",
          "value": 2833
        }, {
          "id": "148",
          "value": 3958
        }, {
          "id": "149",
          "value": 1841
        }, {
          "id": "150",
          "value": 898
        }, {
          "id": "151",
          "value": 4104
        }, {
          "id": "152",
          "value": 1042
        }, {
          "id": "153",
          "value": 1497
        }, {
          "id": "154",
          "value": 2101
        }, {
          "id": "155",
          "value": 4464
        }, {
          "id": "156",
          "value": 1003
        }, {
          "id": "157",
          "value": 3127
        }, {
          "id": "158",
          "value": 264
        }, {
          "id": "159",
          "value": 4343
        }, {
          "id": "160",
          "value": 1482
        }, {
          "id": "161",
          "value": 4236
        }, {
          "id": "162",
          "value": 3363
        }, {
          "id": "163",
          "value": 2281
        }, {
          "id": "164",
          "value": 2371
        }, {
          "id": "165",
          "value": 808
        }, {
          "id": "166",
          "value": 974
        }, {
          "id": "167",
          "value": 4432
        }, {
          "id": "168",
          "value": 416
        }, {
          "id": "169",
          "value": 3412
        }, {
          "id": "170",
          "value": 1132
        }, {
          "id": "171",
          "value": 604
        }, {
          "id": "172",
          "value": 3067
        }, {
          "id": "173",
          "value": 2052
        }, {
          "id": "175",
          "value": 2393
        }, {
          "id": "176",
          "value": 2482
        }, {
          "id": "177",
          "value": 493
        }, {
          "id": "178",
          "value": 2150
        }, {
          "id": "179",
          "value": 4135
        }, {
          "id": "180",
          "value": 3871
        }, {
          "id": "181",
          "value": 1275
        }, {
          "id": "182",
          "value": 2535
        }, {
          "id": "183",
          "value": 2859
        }, {
          "id": "184",
          "value": 1984
        }, {
          "id": "185",
          "value": 278
        }, {
          "id": "186",
          "value": 2533
        }, {
          "id": "187",
          "value": 197
        }, {
          "id": "188",
          "value": 255
        }, {
          "id": "189",
          "value": 2180
        }, {
          "id": "190",
          "value": 3203
        }, {
          "id": "191",
          "value": 1918
        }, {
          "id": "192",
          "value": 1790
        }, {
          "id": "193",
          "value": 3439
        }, {
          "id": "194",
          "value": 2462
        }, {
          "id": "195",
          "value": 2058
        }, {
          "id": "196",
          "value": 3007
        }, {
          "id": "197",
          "value": 4088
        }, {
          "id": "198",
          "value": 382
        }, {
          "id": "199",
          "value": 382
        }, {
          "id": "200",
          "value": 1407
        }, {
          "id": "201",
          "value": 3965
        }, {
          "id": "202",
          "value": 4374
        }, {
          "id": "203",
          "value": 1180
        }, {
          "id": "204",
          "value": 4184
        }, {
          "id": "205",
          "value": 4420
        }, {
          "id": "206",
          "value": 3705
        }, {
          "id": "207",
          "value": 2861
        }, {
          "id": "208",
          "value": 1492
        }, {
          "id": "209",
          "value": 3721
        }, {
          "id": "210",
          "value": 1255
        }, {
          "id": "211",
          "value": 394
        }, {
          "id": "212",
          "value": 484
        }, {
          "id": "213",
          "value": 3438
        }, {
          "id": "214",
          "value": 1908
        }, {
          "id": "215",
          "value": 4228
        }, {
          "id": "216",
          "value": 1655
        }, {
          "id": "217",
          "value": 710
        }, {
          "id": "218",
          "value": 370
        }, {
          "id": "219",
          "value": 2978
        }, {
          "id": "220",
          "value": 2066
        }, {
          "id": "221",
          "value": 2296
        }, {
          "id": "222",
          "value": 1854
        }, {
          "id": "223",
          "value": 2727
        }, {
          "id": "224",
          "value": 1045
        }, {
          "id": "225",
          "value": 3556
        }, {
          "id": "226",
          "value": 3453
        }, {
          "id": "227",
          "value": 4320
        }, {
          "id": "228",
          "value": 196
        }, {
          "id": "229",
          "value": 257
        }, {
          "id": "230",
          "value": 3296
        }, {
          "id": "231",
          "value": 4063
        }, {
          "id": "232",
          "value": 1249
        }, {
          "id": "233",
          "value": 284
        }, {
          "id": "234",
          "value": 2904
        }, {
          "id": "235",
          "value": 3842
        }, {
          "id": "236",
          "value": 4329
        }, {
          "id": "237",
          "value": 3371
        }, {
          "id": "238",
          "value": 2032
        }, {
          "id": "239",
          "value": 239
        }, {
          "id": "240",
          "value": 846
        }, {
          "id": "241",
          "value": 4484
        }]
      }
    }).render();
  });
  