import * as actType from "../Constans/actType";

let initialState = {
    getListApplication:[{}],
};

const applicationReducer = (state=initialState,action)=>{
    switch(action.type){
        case actType.GET_LIST_APPLICATION:
            state.getListApplication = action.data;
            return{...state};
        default:
            return{...state};
    }
}

export default applicationReducer;