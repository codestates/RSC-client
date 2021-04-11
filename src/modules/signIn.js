import { createAction, handleActions } from 'redux-actions';

// action
const CHANGE_LOGGED_IN_STATE = 'signIn/CHANGE_LOGGED_IN_STATE';
// const GET_CITY_NAME_1 = 'signIn/GET_CITY_NAME_1';
// const GET_CITY_NAME_2 = 'signIn/GET_CITY_NAME_2';

// action creator
export const changeLoggedInState = createAction(CHANGE_LOGGED_IN_STATE)
// export const getCityName1 = createAction(GET_CITY_NAME_1);
// export const getCityName2 = createAction(GET_CITY_NAME_2)
// state
const initialState = {
    isLoggedIn: false,
    // cityName1: null,
    // cityName2: null
}   

// reducer
const signIn = handleActions(
    {
        [CHANGE_LOGGED_IN_STATE]: (state, action) => ({ ...state, isLoggedIn: !state.isLoggedIn}),
        // [GET_CITY_NAME_1]: (state, { payload: cityName1 }) => ({ ...state, cityName1}),
        // [GET_CITY_NAME_2]: (state, { payload: cityName2 }) => ({ ...state, cityName2})
    },
    initialState
)

export default signIn;