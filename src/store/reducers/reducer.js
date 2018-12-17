import * as actionTypes from '../actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case actionTypes.ADD_PERSON:{
            return {
                ...state,
                persons: state.persons.concat({id: new Date(), value: action.person})
            }
        }
        default:{
            return state;
        }
    }
};
export default reducer;