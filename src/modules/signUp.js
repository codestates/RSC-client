import { createAction, handleActions } from 'redux-actions';

// action
const CLICK_SIGN_UP_BTN = 'signUp/CLICK_SIGN_UP_BTN';

const SET_EMAIL = 'signUp/SET_EMAIL';
const SET_USER_NAME = 'signUp/SET_USER_NAME';
const SET_PASSWORD = 'signUp/SET_PASSWORD';

const SET_EMAIL_ERROR = 'signUp/SET_EMAIL_ERROR';
const SET__PASSWORD_ERROR = 'signUp/SET_PASSWORD_ERROR';
const SET_SIGN_UP_ERROR = 'signUp/SET_SIGN_UP_ERROR'

const ERASE_EMAIL_ERROR = 'signUp/ERASE_EMAIL_ERROR';
const ERASE_PASSWORD_ERROR = 'signUp/ERASEPASSWORD_ERROR';
const ERASE_SIGN_UP_ERROR = 'signUp/ERASE_SIGN_UP_ERROR';

// action creator
export const clickSignUpBtn = createAction(CLICK_SIGN_UP_BTN);

export const setEmail = createAction(SET_EMAIL, email => email);
export const setUserName = createAction(SET_USER_NAME, userName => userName);
export const setPassword = createAction(SET_PASSWORD, password => password);

export const setEmailError = createAction(SET_EMAIL_ERROR, emailErrorMsg => emailErrorMsg);
export const setPasswordError = createAction(SET__PASSWORD_ERROR, passwordErrorMsg => passwordErrorMsg);
export const setSignUpError = createAction(SET_SIGN_UP_ERROR, signUpErrorMsg => signUpErrorMsg)

export const eraseEmailError = createAction(ERASE_EMAIL_ERROR);
export const erasePasswordError = createAction(ERASE_PASSWORD_ERROR);
export const eraseSignUpError = createAction(ERASE_SIGN_UP_ERROR)

// state
const initialState = {
    isClickedSignUpBtn: false,
    email: null,
    userName: null,
    password: null,
    emailErrorMsg: '올바른 이메일 형식이 아닙니다',
    passwordErrorMsg: '8~15자리 사이로 입력해야 합니다',
    signUpErrorMsg: '필수 항목을 모두 입력해 주세요',
    isLoggedIn: false,
    petName: null,
    petBreed: null
}

// reducer
const signUp = handleActions(
    {
        [CLICK_SIGN_UP_BTN]: (state, action) => ({...state, isClickedSignUpBtn: true}),
        [SET_EMAIL]: (state, { payload: email}) => ({...state, email}),
        [SET_USER_NAME]: (state, {payload: userName}) => ({...state, userName}),
        [SET_PASSWORD]: (state, {payload: password}) => ({...state, password}),
        [SET_EMAIL_ERROR]: (state, {payload: emailErrorMsg}) => ({...state, emailErrorMsg }),
        [SET__PASSWORD_ERROR]: (state, {payload: passwordErrorMsg}) => ({...state, passwordErrorMsg }),
        [SET_SIGN_UP_ERROR]: (state, {payload: signUpErrorMsg}) => ({...state, signUpErrorMsg }),
        [ERASE_EMAIL_ERROR]: (state, action) => ({...state, emailErrorMsg: null }),
        [ERASE_PASSWORD_ERROR]: (state, action) => ({...state, passwordErrorMsg: null }),
        [ERASE_SIGN_UP_ERROR]: (state, action) => ({...state, signUpErrorMsg: null }),
    },
    initialState
)

export default signUp;