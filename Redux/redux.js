const initState={
  user:{ 
    FirstName : "malek",
    LastName : "chebil",
    Email : "malek@gmail.com",
    Adresse: "tunis",
    Gender : "Male",
    Age : 28 ,
    City : "Tunis",
    Feald : "Designer"
  }
}

const reducers = {
    updatedata:(state,action)=>{
        return {
            ...state,
            user:action.value
        }
    },

  };

const rootReducer = (state = initState, action) => {
    console.log(action);
    if (Object.keys(reducers).includes(action.type) ) {
      return reducers[action.type](state,action)
    }
    return state;
  };


module.exports={
    rootReducer
}
  