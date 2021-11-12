import * as actType from "../Constans/actType";

let initialState = {
    listTypeWork:[],
    detailListTypeWork:[],
    detailType:{}
};

const typeworkReducer = (state=initialState,action)=>{
    switch(action.type){
        case actType.GET_TYPE_LIST_WORK:
            state.listTypeWork = action.data;
            return{...state};
        case actType.GET_DETAIL_TYPE_LIST_WORK:
            state.detailListTypeWork = action.data;
            return{...state}; 
        case actType.GET_DETAIL_TYPE:
            state.detailType = action.data;
            return{...state};   
        default:
            return{...state};
    }
}

export default typeworkReducer;