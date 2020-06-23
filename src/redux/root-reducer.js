import { combineReducers } from 'redux';
import isloadingReducer from './loading-reducer';


const rootReducer = combineReducers ({
loading: isloadingReducer
})


export default rootReducer;