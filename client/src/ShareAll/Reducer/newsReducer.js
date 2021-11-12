import * as actType from "../Constans/actType";

let initialState = {
    listNews:[],
    detailNews:{}
};

const newsReducer = (state=initialState,action)=>{
    switch(action.type){
        case actType.GET_LIST_NEWS:
            state.listNews = action.data;
            return{...state};
        case actType.GET_DETAIL_NEWS:
            state.detailNews = action.data;
            return{...state};
        default:
            return{...state};
    }
}

export default newsReducer;