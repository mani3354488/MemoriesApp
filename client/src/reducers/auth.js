import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
    switch (action.key) {
        case actionType.AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };
        case actionType.LOGOUT:
            localStorage.clear();

            return { ...state, authData: null, loading: false, errors: null };
        default:
            return state;
    }
};

export default authReducer;