

  
  const MyComponent = () => {
    useEffect(() => {
        async function pushToDb(arr ) {

  let colorsArr=[
    {"number":"RAL 1000","hex":"#CCC58F","name":"Green beige"},
    {"number":"RAL 1001","hex":"#D1BC8A","name":"Beige"},
    {"number":"RAL 1002","hex":"#D2B773","name":"Sand yellow"},
    {"number":"RAL 1003","hex":"#F7BA0B","name":"Signal yellow"},
    {"number":"RAL 1004","hex":"#E2B007","name":"Golden yellow"},
    {"number":"RAL 1005","hex":"#C89F04","name":"Honey yellow"},
    {"number":"RAL 1006","hex":"#E1A100","name":"Maize yellow"},
    {"number":"RAL 1007","hex":"#E79C00","name":"Daffodil yellow"},
    {"number":"RAL 1011","hex":"#AF8A54","name":"Brown beige"},
    {"number":"RAL 1012","hex":"#D9C022","name":"Lemon yellow"},
    {"number":"RAL 1013","hex":"#E9E5CE","name":"Oyster white"},
    {"number":"RAL 1014","hex":"#DFCEA1","name":"Ivory"},
    {"number":"RAL 1015","hex":"#EADEBD","name":"Light ivory"},
    {"number":"RAL 1016","hex":"#EAF044","name":"Sulfur yellow"},
    {"number":"RAL 1017","hex":"#F4B752","name":"Saffron yellow"},
    {"number":"RAL 1018","hex":"#F3E03B","name":"Zinc yellow"},
    {"number":"RAL 1019","hex":"#A4957D","name":"Grey beige"},
    {"number":"RAL 1020","hex":"#9A9464","name":"Olive yellow"},
    {"number":"RAL 1021","hex":"#EEC900","name":"Rape yellow"},
    {"number":"RAL 1023","hex":"#F0CA00","name":"traffic yellow"},
    {"number":"RAL 1024","hex":"#B89C50","name":"Ochre yellow"},
    {"number":"RAL 1026","hex":"#F5FF00","name":"Luminous yellow"},
    {"number":"RAL 1027","hex":"#A38C15","name":"Curry"},
    {"number":"RAL 1028","hex":"#FFAB00","name":"Melon yellow"},
    {"number":"RAL 1032","hex":"#DDB20F","name":"Broom yellow"},
    {"number":"RAL 1033","hex":"#FAAB21","name":"Dahlia yellow"},
    {"number":"RAL 1034","hex":"#EDAB56","name":"Pastel yellow"},
    {"number":"RAL 1035","hex":"#A29985","name":"Pearl beige"},
    {"number":"RAL 1036","hex":"#927549","name":"Pearl gold"},
    {"number":"RAL 1037","hex":"#EEA205","name":"Sun yellow"},
    {"number":"RAL 2000","hex":"#DD7907","name":"Yellow orange"},
    {"number":"RAL 2001","hex":"#BE4E20","name":"Red orange"},
    {"number":"RAL 2002","hex":"#C63927","name":"Vermillion"},
    {"number":"RAL 2003","hex":"#FA842B","name":"Pastel orange"},
    {"number":"RAL 2004","hex":"#E75B12","name":"Pure orange"},
    {"number":"RAL 2005","hex":"#FF2300","name":"Luminous orange"},
    {"number":"RAL 2007","hex":"#FFA421","name":"Luminous bright orange"},
    {"number":"RAL 2008","hex":"#F3752C","name":"Bright red orange"},
    {"number":"RAL 2009","hex":"#E15501","name":"traffic orange"},
    {"number":"RAL 2010","hex":"#D4652F","name":"Signal orange"},
    {"number":"RAL 2011","hex":"#EC7C25","name":"Deep orange"},
    {"number":"RAL 2012","hex":"#DB6A50","name":"Salmon orange"},
    {"number":"RAL 2013","hex":"#954527","name":"Pearl orange"},
    {"number":"RAL 3000","hex":"#AB2524","name":"Flame red"},
    {"number":"RAL 3001","hex":"#A02128","name":"Signal red"},
    {"number":"RAL 3002","hex":"#A1232B","name":"Carmine red"},
    {"number":"RAL 3003","hex":"#8D1D2C","name":"Ruby red"},
    {"number":"RAL 3004","hex":"#701F29","name":"Purple red"},
    {"number":"RAL 3005","hex":"#5E2028","name":"Wine red"},
    {"number":"RAL 3007","hex":"#402225","name":"Black red"},
    {"number":"RAL 3009","hex":"#703731","name":"Oxide red"},
    {"number":"RAL 3011","hex":"#7E292C","name":"Brown red"},
    {"number":"RAL 3012","hex":"#CB8D73","name":"Beige red"},
    {"number":"RAL 3013","hex":"#9C322E","name":"Tomato red"},
    {"number":"RAL 3014","hex":"#D47479","name":"Antique pink"},
    {"number":"RAL 3015","hex":"#E1A6AD","name":"Light pink"},
    {"number":"RAL 3016","hex":"#AC4034","name":"Coral red"},
    {"number":"RAL 3017","hex":"#D3545F","name":"Rose"},
    {"number":"RAL 3018","hex":"#D14152","name":"Strawberry red"},
    {"number":"RAL 3020","hex":"#C1121C","name":"traffic red"},
    {"number":"RAL 3022","hex":"#D56D56","name":"Salmon pink"},
    {"number":"RAL 3024","hex":"#F70000","name":"Luminous red"},
    {"number":"RAL 3026","hex":"#FF0000","name":"Luminous bright red"},
    {"number":"RAL 3027","hex":"#B42041","name":"Raspberry red"},
    {"number":"RAL 3028","hex":"#E72512","name":"Pure red"},
    {"number":"RAL 3031","hex":"#AC323B","name":"Orient red"},
    {"number":"RAL 3032","hex":"#711521","name":"Pearl ruby red"},
    {"number":"RAL 3033","hex":"#B24C43","name":"Pearl pink"},
    {"number":"RAL 4001","hex":"#8A5A83","name":"Red lilac"},
    {"number":"RAL 4002","hex":"#933D50","name":"Red violet"},
    {"number":"RAL 4003","hex":"#D15B8F","name":"Heather violet"},
    {"number":"RAL 4004","hex":"#691639","name":"Claret violet"},
    {"number":"RAL 4005","hex":"#83639D","name":"Blue lilac"},
    {"number":"RAL 4006","hex":"#992572","name":"Traffic purple"},
    {"number":"RAL 4007","hex":"#4A203B","name":"Purple violet"},
    {"number":"RAL 4008","hex":"#904684","name":"Signal violet"},
    {"number":"RAL 4009","hex":"#A38995","name":"Pastel violet"},
    {"number":"RAL 4010","hex":"#C63678","name":"Telemagenta"},
    {"number":"RAL 4011","hex":"#8773A1","name":"Pearl violet"},
    {"number":"RAL 4012","hex":"#6B6880","name":"Pearl blackberry"},
    {"number":"RAL 5000","hex":"#384C70","name":"Violet blue"},
    {"number":"RAL 5001","hex":"#1F4764","name":"Green blue"},
    {"number":"RAL 5002","hex":"#2B2C7C","name":"Ultramarine blue"},
    {"number":"RAL 5003","hex":"#2A3756","name":"Sapphire blue"},
    {"number":"RAL 5004","hex":"#1D1F2A","name":"Black blue"},
    {"number":"RAL 5005","hex":"#154889","name":"Signal blue"},
    {"number":"RAL 5007","hex":"#41678D","name":"Brilliant blue"},
    {"number":"RAL 5008","hex":"#313C48","name":"Grey blue"},
    {"number":"RAL 5009","hex":"#2E5978","name":"Azure blue"},
    {"number":"RAL 5010","hex":"#13447C","name":"Gentian blue"},
    {"number":"RAL 5011","hex":"#232C3F","name":"Steel blue"},
    {"number":"RAL 5012","hex":"#3481B8","name":"Light blue"},
    {"number":"RAL 5013","hex":"#232D53","name":"Cobalt blue"},
    {"number":"RAL 5014","hex":"#6C7C98","name":"Pigeon blue"},
    {"number":"RAL 5015","hex":"#2874B2","name":"Sky blue"},
    {"number":"RAL 5017","hex":"#0E518D","name":"Traffic blue"},
    {"number":"RAL 5018","hex":"#21888F","name":"Turquoise blue"},
    {"number":"RAL 5019","hex":"#1A5784","name":"Capri blue"},
    {"number":"RAL 5020","hex":"#0B4151","name":"Ocean blue"},
    {"number":"RAL 5021","hex":"#07737A","name":"Water blue"},
    {"number":"RAL 5022","hex":"#2F2A5A","name":"Night blue"},
    {"number":"RAL 5023","hex":"#4D668E","name":"Distant blue"},
    {"number":"RAL 5024","hex":"#6A93B0","name":"Pastel blue"},
    {"number":"RAL 5025","hex":"#296478","name":"Pearl Gentian blue"},
    {"number":"RAL 5026","hex":"#102C54","name":"Pearl night blue"},
    {"number":"RAL 6000","hex":"#327662","name":"Patina green"},
    {"number":"RAL 6001","hex":"#28713E","name":"Emerald green"},
    {"number":"RAL 6002","hex":"#276235","name":"Leaf green"},
    {"number":"RAL 6003","hex":"#4B573E","name":"Olive Green"},
    {"number":"RAL 6004","hex":"#0E4243","name":"Blue green"},
    {"number":"RAL 6005","hex":"#0F4336","name":"Moss green"},
    {"number":"RAL 6006","hex":"#40433B","name":"Grey olive"},
    {"number":"RAL 6007","hex":"#283424","name":"Bottle green"},
    {"number":"RAL 6008","hex":"#35382E","name":"Brown green"},
    {"number":"RAL 6009","hex":"#26392F","name":"Fir green"},
    {"number":"RAL 6010","hex":"#3E753B","name":"Grass green"},
    {"number":"RAL 6011","hex":"#68825B","name":"Reseda green"},
    {"number":"RAL 6012","hex":"#31403D","name":"Black green"},
    {"number":"RAL 6013","hex":"#797C5A","name":"Reed green"},
    {"number":"RAL 6014","hex":"#444337","name":"Yellow olive"},
    {"number":"RAL 6015","hex":"#3D403A","name":"Black olive"},
    {"number":"RAL 6016","hex":"#026A52","name":"Turquoise green"},
    {"number":"RAL 6017","hex":"#468641","name":"May green"},
    {"number":"RAL 6018","hex":"#48A43F","name":"Yellow green"},
    {"number":"RAL 6019","hex":"#B7D9B1","name":"pastel green"},
    {"number":"RAL 6020","hex":"#354733","name":"Chrome green"},
    {"number":"RAL 6021","hex":"#86A47C","name":"Pale green"},
    {"number":"RAL 6022","hex":"#3E3C32","name":"Brown olive"},
    {"number":"RAL 6024","hex":"#008754","name":"Traffic green"},
    {"number":"RAL 6025","hex":"#53753C","name":"Fern green"},
    {"number":"RAL 6026","hex":"#005D52","name":"Opal green"},
    {"number":"RAL 6027","hex":"#81C0BB","name":"Light green"},
    {"number":"RAL 6028","hex":"#2D5546","name":"Pine green"},
    {"number":"RAL 6029","hex":"#007243","name":"Mint green"},
    {"number":"RAL 6032","hex":"#0F8558","name":"Signal green"},
    {"number":"RAL 6033","hex":"#478A84","name":"Mint turquoise"},
    {"number":"RAL 6034","hex":"#7FB0B2","name":"Pastel turquoise"},
    {"number":"RAL 6035","hex":"#1B542C","name":"Pearl green"},
    {"number":"RAL 6036","hex":"#005D4C","name":"Pearl opal green"},
    {"number":"RAL 6037","hex":"#25E712","name":"Pure green"},
    {"number":"RAL 6038","hex":"#00F700","name":"Luminous green"},
    {"number":"RAL 7000","hex":"#7E8B92","name":"Squirrel grey"},
    {"number":"RAL 7001","hex":"#8F999F","name":"Silver grey"},
    {"number":"RAL 7002","hex":"#817F68","name":"Olive grey"},
    {"number":"RAL 7003","hex":"#7A7B6D","name":"Moss grey"},
    {"number":"RAL 7004","hex":"#9EA0A1","name":"Signal grey"},
    {"number":"RAL 7005","hex":"#6B716F","name":"Mouse grey"},
    {"number":"RAL 7006","hex":"#756F61","name":"Beige grey"},
    {"number":"RAL 7008","hex":"#746643","name":"Khaki grey"},
    {"number":"RAL 7009","hex":"#5B6259","name":"Green grey"},
    {"number":"RAL 7010","hex":"#575D57","name":"Tarpaulin grey"},
    {"number":"RAL 7011","hex":"#555D61","name":"Iron grey"},
    {"number":"RAL 7012","hex":"#596163","name":"Basalt grey"},
    {"number":"RAL 7013","hex":"#555548","name":"Brown-grey also NATO-olive, Stone-grey-olive"},
    {"number":"RAL 7015","hex":"#51565C","name":"Slate grey"},
    {"number":"RAL 7016","hex":"#373F43","name":"Anthracite grey"},
    {"number":"RAL 7021","hex":"#2E3234","name":"Black grey"},
    {"number":"RAL 7022","hex":"#4B4D46","name":"Umbra grey"},
    {"number":"RAL 7023","hex":"#818479","name":"Concrete grey"},
    {"number":"RAL 7024","hex":"#474A50","name":"Graphite grey"},
    {"number":"RAL 7026","hex":"#374447","name":"Granite grey"},
    {"number":"RAL 7030","hex":"#939388","name":"Stone grey"},
    {"number":"RAL 7031","hex":"#5D6970","name":"Blue grey"},
    {"number":"RAL 7032","hex":"#B9B9A8","name":"Pebble grey"},
    {"number":"RAL 7033","hex":"#818979","name":"Cement grey"},
    {"number":"RAL 7034","hex":"#939176","name":"Yellow grey"},
    {"number":"RAL 7035","hex":"#CBD0CC","name":"Light grey"},
    {"number":"RAL 7036","hex":"#9A9697","name":"Platinum grey"},
    {"number":"RAL 7037","hex":"#7C7F7E","name":"Dusty grey"},
    {"number":"RAL 7038","hex":"#B4B8B0","name":"Agate grey"},
    {"number":"RAL 7039","hex":"#6B695F","name":"Quartz grey"},
    {"number":"RAL 7040","hex":"#9DA3A6","name":"Window grey"},
    {"number":"RAL 7042","hex":"#8F9695","name":"Traffic grey A"},
    {"number":"RAL 7043","hex":"#4E5451","name":"Traffic grey B"},
    {"number":"RAL 7044","hex":"#BDBDB2","name":"Silk grey"},
    {"number":"RAL 7045","hex":"#91969A","name":"Telegrey 1"},
    {"number":"RAL 7046","hex":"#82898E","name":"Telegrey 2"},
    {"number":"RAL 7047","hex":"#CFD0CF","name":"Telegrey 4"},
    {"number":"RAL 7048","hex":"#888175","name":"Pearl mouse grey"},
    {"number":"RAL 8000","hex":"#887142","name":"Green brown"},
    {"number":"RAL 8001","hex":"#9C6B30","name":"Ochre brown"},
  {"number":"RAL 8002","hex":"#7B5141","name":"Signal brown"},
  {"number":"RAL 8003","hex":"#80542F","name":"Clay brown"},  
  {"number":"RAL 8004","hex":"#8F4E35","name":"Copper brown"},
  {"number":"RAL 8007","hex":"#6F4A2F","name":"Fawn brown"},
  {"number":"RAL 8008","hex":"#6F4F28","name":"Olive brown"},
  {"number":"RAL 8011","hex":"#5A3A29","name":"Nut brown"},
  {"number":"RAL 8012","hex":"#673831","name":"Red brown"},
  {"number":"RAL 8014","hex":"#49392D","name":"Sepia brown"},
  {"number":"RAL 8015","hex":"#633A34","name":"Chestnut brown"},
  {"number":"RAL 8016","hex":"#4C2F26","name":"Mahogany brown"},  
  {"number":"RAL 8017","hex":"#44322D","name":"Chocolate brown"},
  {"number":"RAL 8019","hex":"#3F3A3A","name":"Grey brown"},
  {"number":"RAL 8022","hex":"#211F20","name":"Black brown"},
  {"number":"RAL 8023","hex":"#A65E2F","name":"Orange brown"},
  {"number":"RAL 8024","hex":"#79553C","name":"Beige brown"},
  {"number":"RAL 8025","hex":"#755C49","name":"Pale brown"},
  {"number":"RAL 8028","hex":"#4E3B31","name":"Terra brown"},
  {"number":"RAL 8029","hex":"#763C28","name":"Pearl copper"},  
  {"number":"RAL 9001","hex":"#FDF4E3","name":"Cream"},
  {"number":"RAL 9002","hex":"#E7EBDA","name":"Grey white"},
  {"number":"RAL 9003","hex":"#F4F4F4","name":"Signal white"},
  {"number":"RAL 9004","hex":"#282828","name":"Signal black"},
  {"number":"RAL 9005","hex":"#0A0A0A","name":"Jet black"},
  {"number":"RAL 9006","hex":"#A5A5A5","name":"White aluminum"},
  {"number":"RAL 9007","hex":"#8F8F8F","name":"Grey aluminum"},
  {"number":"RAL 9010","hex":"#FFFFFF","name":"Pure white"},
  {"number":"RAL 9011","hex":"#1C1C1C","name":"Graphite black"},
  {"number":"RAL 9016","hex":"#F6F6F6","name":"Traffic white"},
  {"number":"RAL 9017","hex":"#1E1E1E","name":"Traffic black"},
  {"number":"RAL 9018","hex":"#D7D7D7","name":"Papyrus white"},
  {"number":"RAL 9022","hex":"#9C9C9C","name":"Pearl light grey"},
  {"number":"RAL 9023","hex":"#828282","name":"Pearl dark grey"}
  ]
let sizeArr=[
    {
    "name":"1220x2440",
    "value":"1220x2440"
    },
    {
    "name":"1000x2000",
    "value":"1000x2000"
    },
    {
    "name":"1220x4000",
    "value":"1220x4000"
    },
    {
    "name":"1000x3000",
    "value":"1000x3000"
    },
    {
    "name":"1000x4000",
    "value":"1000x4000"
    },
    {
    "name":"1500x3000",
    "value":"1500x3000"
    },
    {
    "name":"1250x3000",
    "value":"1250x3000"
    },
    {
    "name":"1500x4000",
    "value":"1500x4000"
    },
    {
    "name":"1500x5000",
    "value":"1500x5000"
    },
    {
    "name": "1250x4000",
    "value": "1250x4000"
    },
    {
    "name": "1220x3000",
    "value": "1220x3000"
    },
    {
    "name": "2050x3050",
    "value": "2050x3050"
    },
    {
    "name": "2030x3050",
    "value": "2030x3050"
    },
    {
    "name":  "1560x3050",
    "value":  "1560x3050"
    },
    {
    "name":  "1500x2000",
    "value":  "1500x2000"
    },
    {
    "name":   "1540x2030",
    "value":   "1540x2030"
    },
    {
    "name":   "2050x1250",
    "value":  "2050x1250"
    },
    {
    "name":   "700x1000",
    "value": "700x1000"
    },
    {
    "name":   "1016x1524",
    "value":  "1016x1524"
    },
    {
    "name":"1520x3050",
    "value":"1520x3050"
    }    
  ]
let catArr=[
{"name":"ACP"
},
{"name":"PVDF"
},
{"name":"FR"
},
{"name":"Acrylic"
},
{"name":"pc solid color"
},
{"name":"PVC"
},
{"name":"דבקים וסיליקון"
},
{"name":"פרופילים"
},
{"name":"קאפה"
},
{"name":"מוצרים משלימים"
},
{"name":"קטלוג צבעים"
}
  ]

  
  
            for(let i=0;i<arr.length;i++) {
         
              await prismadb.color.create({
                data:{...arr[i]} 
              })
             console.log( arr) }
            // Insert data 
           
          
             pushToDb()
        .catch(e => {
          console.error(e)
        })
        .finally(async () => {
          await prismadb.$disconnect() 
        })
          
          }
         
      return () => {
      
      };
    }, []);


