import { combineReducers } from 'redux';
import workReducer from "./workReducer";
import typeworkReducer from "./typeWorkReduce";
import newsReducer from './newsReducer';
import AccountCvReducer from './filecv';
import userReducer from './userReducer';
import applicationReducer from './applicationReducer';
import companyReducer from './companyReducer';
import workUserReducer from './workUserReducer'
const rootReducer = combineReducers({
    workReducer,
    typeworkReducer,
    newsReducer,
    AccountCvReducer,
    userReducer,
    applicationReducer,
    companyReducer,
    workUserReducer
});
export default rootReducer;