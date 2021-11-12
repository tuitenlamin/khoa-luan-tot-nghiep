import * as actType from "../Constans/actType";

let initialState = {
    getInfoCvUser:{},
    detailCV:{}
};

const AccountCvReducer = (state=initialState,action)=>{
    switch(action.type){
        case actType.GET_FILE_CV_ACCOUNT_WORK:
            state.getInfoCvUser = action.data;
            return{...state};
        case actType.GET_DETAIL_FILVE_CV:
            state.detailCV = action.data;
            return{...state};
        default:
            return{...state};
    }
}

export default AccountCvReducer;