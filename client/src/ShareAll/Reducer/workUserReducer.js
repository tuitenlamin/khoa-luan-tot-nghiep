import * as actType from "../Constans/actType";
let initialState = {
    listUserWork:[],
    detailUserWorkAdmin:{}
};

const workUserReducer = (state=initialState,action)=>{
    switch(action.type){
        case actType.GET_LIST_USER_WORK_ADMIN:
            state.listUserWork = action.data;
            return{...state};
        case actType.DETAIL_USER_WORK_ADMIN:
            state.detailUserWorkAdmin = action.data;
            return{...state};
        default:
            return {...state};
    }
};
export default workUserReducer;