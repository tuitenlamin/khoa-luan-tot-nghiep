import * as actType from "../Constans/actType";

let initialState = {
    getListCompany:[],
    getInfoEmloyer:[{}],
    getdetailCompany:{},
    detailAccountCompany:{}
};

const companyReducer = (state=initialState,action)=>{
    switch(action.type){
        case actType.GET_LIST_COMPANY:
            state.getListCompany = action.data;
            return{...state};
        case actType.INFORMATION_EMLOYER:
            state.getInfoEmloyer = action.data;
            return{...state};
        case actType.DETAIL_COMAPANY:
            state.getdetailCompany = action.data;
            return{...state};
        case actType.DETAIL_ACCOUNT_COMPANY:
            state.detailAccountCompany = action.data;
            return{...state};
        default:
            return{...state};
    }
}

export default companyReducer;