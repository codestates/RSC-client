import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SignIn from '../components/SignIn';
import {
    setEmail,
    setUserName,
    setPassword,
    setEmailError,
    setPasswordError,
    eraseEmailError,
    erasePasswordError,
} from '../modules/signUp';
import {
    changeLoggedInState,
} from '../modules/signIn'
import {
    getMyLocationName,
    getMyLocationName2 
} from '../modules/myLocation'

const SignInContainer = () => {
    const email = useSelector(state => state.signUp.email);
    const password = useSelector(state => state.signUp.password);
    const emailErrorMsg = useSelector(state => state.signUp.emailErrorMsg);
    const passwordErrorMsg = useSelector(state => state.signUp.passwordErrorMsg);
    const isLoggedIn = useSelector(state => state.signIn.isLoggedIn);
    const myLocationName = useSelector(state => state.myLocation.myLocationName)
    const myLocationName2 = useSelector(state => state.myLocation.myLocationName2)   
    
    const dispatch = useDispatch();
    
    const getMyLocationNameAction = useCallback((name) => dispatch(getMyLocationName(name)), [dispatch]);
    const getMyLocationNameAction2 = useCallback((name) => dispatch(getMyLocationName2(name)), [dispatch]);
    const setEmailAction = useCallback((email) => dispatch(setEmail(email)), [dispatch]);    
    const setUserNameAction = useCallback((name) => dispatch(setUserName(name)), [dispatch]);    
    const setPasswordAction = useCallback((email) => dispatch(setPassword(email)), [dispatch]);
    const setEmailErrorAction = useCallback((email) => dispatch(setEmailError(email)), [dispatch]);
    const setPasswordErrorAction = useCallback((email) => dispatch(setPasswordError(email)), [dispatch]);
    const eraseEmailErrorAction = useCallback((email) => dispatch(eraseEmailError(email)), [dispatch]);
    const erasePasswordErrorAction = useCallback((email) => dispatch(erasePasswordError(email)), [dispatch]);
    const changeLoggedInStateAction = useCallback(() => dispatch(changeLoggedInState()), [dispatch]);
    

    return (
       <SignIn 
            email={email}
            password={password}
            emailErrorMsg={emailErrorMsg}
            passwordErrorMsg={passwordErrorMsg}
            isLoggedIn={isLoggedIn}
            myLocationName={myLocationName}
            myLocationName2={myLocationName2}
            setEmailAction={setEmailAction}
            setUserNameAction={setUserNameAction}
            setPasswordAction={setPasswordAction}
            setEmailErrorAction={setEmailErrorAction}
            setPasswordErrorAction={setPasswordErrorAction}
            eraseEmailErrorAction={eraseEmailErrorAction}
            erasePasswordErrorAction={erasePasswordErrorAction}
            changeLoggedInStateAction={changeLoggedInStateAction}
            getMyLocationNameAction={getMyLocationNameAction}
            getMyLocationNameAction2={getMyLocationNameAction2}
       />
    );
};


export default React.memo(SignInContainer);