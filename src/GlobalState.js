import React,{useState} from 'react';

 const ParameterContext = React.createContext([{}, () => {}]);

 const GlobalStateProvider = (props) =>{

    const [state, setState] = useState({
        Countries : [
            {
                Country:"Uganda",
                Export:{
                        "2018":{
                            "December":0, "November":0, "October":0,
                            "September":0,
                            "August":0,
                            "July":0,
                            "June":0,
                            "May":0,
                            "April":0,
                            "March":0,
                            "February":0,
                            "January" : 0
                        },
                        "2017":{
                            "December":0,
                            "November":0,
                            "October":0,
                            "September":0,
                            "August":0,
                            "July":0,
                            "June":0,
                            "May":0,
                            "April":0,
                            "March":0,
                            "February":0,
                            "January" : 0},
                        "2016":{
                            "December":0,
                            "November":0,
                            "October":0,
                            "September":0,
                            "August":0,
                            "July":0,
                            "June":0,
                            "May":0,
                            "April":0,
                            "March":0,
                            "February":0,
                            "January" : 0
                        },
                        "2015":{
                            "December":0,
                            "November":0,
                            "October":0,
                            "September":0,
                            "August":0,
                            "July":0,
                            "June":0,
                            "May":0,
                            "April":0,
                            "March":0,
                            "February":0,
                            "January" : 0
                        }
                    },
                Import:{			
                        "2018":{
                            "December":0,
                            "November":0,
                            "October":0,
                            "September":0,
                            "August":0,
                            "July":0,
                            "June":0,
                            "May":0,
                            "April":0,
                            "March":0,
                            "February":0,
                            "January" : 0
                        },
                        "2017":{
                            "December":0,
                            "November":0,
                            "October":0,
                            "September":0,
                            "August":0,
                            "July":0,
                            "June":0,
                            "May":0,
                            "April":0,
                            "March":0,
                            "February":0,
                            "January" : 0},
                        "2016":{
                            "December":0,
                            "November":0,
                            "October":0,
                            "September":0,
                            "August":0,
                            "July":0,
                            "June":0,
                            "May":0,
                            "April":0,
                            "March":0,
                            "February":0,
                            "January" : 0
                        },
                        "2015":{
                            "December":0,
                            "November":0,
                            "October":0,
                            "September":0,
                            "August":0,
                            "July":0,
                            "June":0,
                            "May":0,
                            "April":0,
                            "March":0,
                            "February":0,
                            "January" : 0
                        }
                    }
                
            },{
                Country:"Tanzania",
                Export:{
                        "2018":{
                            "December":0,
                            "November":0,
                            "October":0,
                            "September":0,
                            "August":0,
                            "July":0,
                            "June":0,
                            "May":0,
                            "April":0,
                            "March":0,
                            "February":0,
                            "January" : 0
                        },
                        "2017":{
                            "December":0,
                            "November":0,
                            "October":0,
                            "September":0,
                            "August":0,
                            "July":0,
                            "June":0,
                            "May":0,
                            "April":0,
                            "March":0,
                            "February":0,
                            "January" : 0},
                        "2016":{
                            "December":0,
                            "November":0,
                            "October":0,
                            "September":0,
                            "August":0,
                            "July":0,
                            "June":0,
                            "May":0,
                            "April":0,
                            "March":0,
                            "February":0,
                            "January" : 0
                        },
                        "2015":{
                            "December":0,
                            "November":0,
                            "October":0,
                            "September":0,
                            "August":0,
                            "July":0,
                            "June":0,
                            "May":0,
                            "April":0,
                            "March":0,
                            "February":0,
                            "January" : 0
                        }
                    },
                Import:{			
                        "2018":{
                            "December":0,
                            "November":0,
                            "October":0,
                            "September":0,
                            "August":0,
                            "July":0,
                            "June":0,
                            "May":0,
                            "April":0,
                            "March":0,
                            "February":0,
                            "January" : 0
                        },
                        "2017":{
                            "December":0,
                            "November":0,
                            "October":0,
                            "September":0,
                            "August":0,
                            "July":0,
                            "June":0,
                            "May":0,
                            "April":0,
                            "March":0,
                            "February":0,
                            "January" : 0},
                        "2016":{
                            "December":0,
                            "November":0,
                            "October":0,
                            "September":0,
                            "August":0,
                            "July":0,
                            "June":0,
                            "May":0,
                            "April":0,
                            "March":0,
                            "February":0,
                            "January" : 0
                        },
                        "2015":{
                            "December":0,
                            "November":0,
                            "October":0,
                            "September":0,
                            "August":0,
                            "July":0,
                            "June":0,
                            "May":0,
                            "April":0,
                            "March":0,
                            "February":0,
                            "January" : 0
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