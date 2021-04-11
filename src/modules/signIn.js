import { createAction, handleActions } from 'redux-actions';

// action
const CHANGE_LOGGED_IN_STATE = 'signIn/CHANGE_LOGGED_IN_STATE';

// action creator
export const changeLoggedInState = createAction(CHANGE_LOGGED_IN_STATE)
// state
const initialState = {
    isLoggedIn: false,
}

// reducer
const signIn = handleActions(
    {
        [CHANGE_LOGGED_IN_STATE]: (state, action) => ({ ...state, isLoggedIn: !state.isLoggedIn}),
    },
    initialState
)

export default signIn;