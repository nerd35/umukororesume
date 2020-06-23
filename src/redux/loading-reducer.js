import { IS_LOADING } from './types';

const initialState = {
  isloading: true
}


const isloadingReducer = (state = initialState , action) => {
  switch (action.type) {
    case IS_LOADING:
      
     return {
       ...state,
       isLoading: false
     }
  
    default:
      return state;
  }
}

export default isloadingReducer;