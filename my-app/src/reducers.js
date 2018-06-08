const initialState = {
  row1: false,
  row2: false
};

export const rowReducer = (state = initialState, action ) =>{
    console.log(action,">>>")
    switch(action.type){
        case 'UPDATE_VALUES':{
            return{
              ...state,
              [action.keyValue]: true
            }
        }
      default: return state
    }
    return state;
}