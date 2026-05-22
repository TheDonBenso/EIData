import React,{useState} from 'react';

 const ParameterContext = React.createContext([{}, () => {}]);

 const GlobalStateProvider = (props) =>{

    const [state, setState] = useState({
        Countries :  [
            {
                "Key" : 1,
                "Country":"Uganda",
                "Export":{
                        "2018":{
                            "December":	5006,
                            "November":	5248,
                            "October":	5509,
                            "September":	5229,
                            "August":	5311,
                            "July":	4552,
                            "June":	4922,
                            "May":	5672,
                            "April":	4242,
                            "March":	5581,
                            "February":	5838,
                            "January":	4749


                        },
                        "2017":{
                            "December":	5221,
                            "November":	5601,
                            "October"	:4075,
                            "September":	5792,
                            "August"	:4461,
                            "July":	5372,
                            "June":	4878,
                            "May"	:4774,
                            "April":	4770,
                            "March":	5817,
                            "February":	5674,
                            "January"	:5381
    },
                        "2016":{
                            "December":	5145,
                            "November":	5275,
                            "October"	:5349,
                            "September":	4552,
                            "August":	4899,
                            "July":	6118,
                            "June":	4664,
                            "May"	: 4221,
                            "April":	6323,
                            "March":	6268,
                            "February":	4707,
                            "January":	4644
                            
                        },
                        "2015":{
                            "December":	4550,
                            "November":	4749,
                            "October"	:5402,
                            "September":	5611,
                            "August"	:8213,
                            "July"	:10328,
                            "June"	:4947,
                            "May"	:5049,
                            "April":	4410,
                            "March":	5420,
                            "February":	5599,
                            "January":	4130

                        }
                    },
                "Import":{			
                        "2018":{
                            "December":	2095,
                            "November":	3098,
                            "October"	:3087,
                            "September":	3666,
                            "August":	3421,
                            "July"	:4058,
                            "June"	:4544,
                            "May"	:4959,
                            "April":	3714,
                            "March":	4305,
                            "February":	5546,
                            "January"	:6943
                            
                        },
                        "2017":{
                            "December"	:6407,
                            "November"	:7587,
                            "October"		:2925,
                            "September"	:4005,
                            "August"	:	2903,
                            "July"	:	2725,
                            "June"	:	3504,
                            "May"		:	3620,
                            "April"	:	1551,
                            "March"	:	2310,
                            "February":	2325,
                            "January"	:	2180
                            },
                        "2016":{
                            "December":	1530,
                            "November":	3140,
                            "October"		:2308,
                            "September":	2143,
                            "August"	:	1439,
                            "July"	:	954,
                            "June"	:	1697,
                            "May"		:1269,
                            "April":	814,
                            "March"	:1033,
                            "February":	1179,
                            "January"	:1769

                        },
                        "2015":{
                            "December"	:1348,
                            "November"	:2827,
                            "October"	:1736,
                            "September":	2111,
                            "August":	1437,
                            "July"	:1438,
                            "June"	:2228,
                            "May"	:	1465,
                            "April"	:1111,
                            "March"	:1237,
                            "February":	3128,
                            "January"	:2217

                        }
                    }            
            },
            {
                "Key" : 2,
                "Country":"Tanzania",
                "Export":{
                        "2018":{
                            "December"	:2200,
                            "November"	:2697,
                            "October"	:	2667,
                            "September"	:2305,
                            "August":	2608,
                            "July"	:2464,
                            "June"	:2012,
                            "May"	:2815,
                            "April":	2618,
                            "March":	2370,
                            "February":	3010,
                            "January"	:	1967

                        },
                        "2017":{
                            "December"	:2268,
                            "November":	2871,
                            "October"	:2626,
                            "September":	2631,
                            "August"	:2551,
                            "July"	:2330,
                            "June"	:1882,
                            "May"	:1958,
                            "April":	1644,
                            "March":	2828,
                            "February":	2562,
                            "January"	:2368
                            },
                        "2016":{
                            "December":	2741,
                            "November":	3195,
                            "October":	2448,
                            "September":	2631,
                            "August":	2379,
                            "July":	2091,
                            "June":	2767,
                            "May":	3439,
                            "April":	2459,
                            "March":	4038,
                            "February":	3350,
                            "January":	3259
                        },
                        "2015":{
                            "December":	3176,
                            "November":	3412,
                            "October":	3132,
                            "September":	2809,
                            "August"	:2344,
                            "July":	2765,
                            "June":	2765,
                            "May":	3497,
                            "April":	2176,
                            "March":	2718,
                            "February":	2236,
                            "January":	1846                        }
                    },
                "Import":{			
                        "2018":{
                            "December":	1383,
                            "November":	2003,
                            "October":	1733,
                            "September":	1354,
                            "August":	1121,
                            "July":	1768,
                            "June":	1069,
                            "May":	1372,
                            "April":	1455,
                            "March":	1226,
                            "February":	1646,
                            "January":	1688
                        },
                        "2017":{
                            "December":	1871,
                            "November":	1916,
                            "October":	1306,
                            "September":	1545,
                            "August":	1307,
                            "July":	1398,
                            "June":	1245,
                            "May":	1550,
                            "April":	1075,
                            "March":	1132,
                            "February":	1168,
                            "January":	1667
                        },
                        "2016":{
                            "December":	1056,
                            "November":	1173,
                            "October":	966,
                            "September":	1043,
                            "August":	1235,
                            "July":	1269,
                            "June":	1271,
                            "May":	1061,
                            "April":	983,
                            "March":	846,
                            "February":	916,
                            "January":	984
                        },
                        "2015":{
                            "December":	834,
                            "November":	871,
                            "October":	769,
                            "September":	1326,
                            "August":	1514,
                            "July":	1974,
                            "June":	1725,
                            "May":	2022,
                            "April":	2013,
                            "March":	1263,
                            "February":	1405,
                            "January":	1191
                        }
                    }            
            } 
    ],
        selectedCountries :[],
        tradeType: ""
    } );
    

    return (
        <ParameterContext.Provider value={[state, setState]}>
            {props.children}
        </ParameterContext.Provider>
    );
};

export {ParameterContext, GlobalStateProvider};