import * as actType from "../Constans/actType";

let initialState = {
    listWork:[],
    detailListWork:{},
    detailinfouserwork: {},
    getlistworkcompany: [],
    getWorkContent: [],
    getListUserPostWork:[],
    detailUpdateWork:{},
    detailWorkFromCompany:{}
};

const workReducer = (state=initialState,action)=>{
    switch(action.type){
        case actType.GET_LIST_WORK:
            state.listWork = action.data;
            return{...state};
        case actType.GET_DETAIL_LIST_WORK:
            state.detailListWork = action.data;
            return{...state};
        case actType.GET_DETAIL_INFO_USER_WORK:
            state.detailinfouserwork = action.data;
            return{...state};
        case actType.GET_LIST_WORK_COMPANY:
            state.getlistworkcompany = action.data;
            return{...state};
        case actType.GET_LIST_WORK_CONTENT:
            state.getWorkContent = action.data;
            return{...state};
        case actType.GET_LIST_USER_POST_WORK:
            state.getListUserPostWork = action.data;
            return{...state};
        case actType.DETAIL_UPDATE_WORK:
            state.detailUpdateWork = action.data;
            return{...state};
        case actType.DETAIL_FROM_COMPANY:
            state.detailWorkFromCompany = action.data;
            return{...state};
        default:
            return {...state};
    }
};

export default workReducer;