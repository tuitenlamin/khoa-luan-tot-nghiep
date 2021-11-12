import * as actType from "../Constans/actType";

let initialState = {
    listUser: [],
    getdetailuser:{},
    userEdit: null,
    listWorkUserPost:[{}],
    listAplliedUser:[]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actType.GET_LIST_USER:
           state.listUser = action.data;
            break;  
        case actType.GET_LIST_DETAIL_USER:
            state.getdetailuser = action.data;
                break;  
        case actType.CREATE_WORK_USER:
            state.listWorkUserPost = action.data;
            break;
        case actType.LIST_APPLIED_USER:
            state.listAplliedUser = action.data;
        break;
        default:
            break;
    }
        return {...state}
    }
    
export default userReducer;