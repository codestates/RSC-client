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
    // getCityName1,
    // getCityName2
} from '../modules/signIn'
import {
    getCityName
} from '../modules/landingPresentWeather'
import { 
    getMyLocationName
} from '../modules/myLocation'

const SignInContainer = () => {
    const email = useSelector(state => state.signUp.email);
    const password = useSelector(state => state.signUp.password);
    const emailErrorMsg = useSelector(state => state.signUp.emailErrorMsg);
    const passwordErrorMsg = useSelector(state => state.signUp.passwordErrorMsg);
    const isLoggedIn = useSelector(state => state.signIn.isLoggedIn);
    // const cityName1 = useSelector(state => state.signIn.cityName1);
    // const cityName2 = useSelector(state => state.signIn.cityName2);

    const dispatch = useDispatch();
    const getMyLocationNameAction = useCallback((num,name) => dispatch(getMyLocationName(num,name)), [dispatch]);
    const setEmailAction = useCallback((email) => dispatch(setEmail(email)), [dispatch]);    
    const setUserNameAction = useCallback((name) => dispatch(setUserName(name)), [dispatch]);    
    const setPasswordAction = useCallback((email) => dispatch(setPassword(email)), [dispatch]);
    const setEmailErrorAction = useCallback((email) => dispatch(setEmailError(email)), [dispatch]);
    const setPasswordErrorAction = useCallback((email) => dispatch(setPasswordError(email)), [dispatch]);
    const eraseEmailErrorAction = useCallback((email) => dispatch(eraseEmailError(email)), [dispatch]);
    const erasePasswordErrorAction = useCallback((email) => dispatch(erasePasswordError(email)), [dispatch]);
    const changeLoggedInStateAction = useCallback(() => dispatch(changeLoggedInState()), [dispatch]);
    const getCityNameAction = useCallback((city) => dispatch(getCityName(city)), [dispatch]);
    // const getCityName1Action = useCallback((city) => dispatch(getCityName1(city)), [dispatch]);
    // const getCityName2Action = useCallback((city) => dispatch(getCityName2(city)), [dispatch]);

    

    return (
       <SignIn 
            email={email}
            password={password}
            emailErrorMsg={emailErrorMsg}
            passwordErrorMsg={passwordErrorMsg}
            isLoggedIn={isLoggedIn}
            setEmailAction={setEmailAction}
            setUserNameAction={setUserNameAction}
            setPasswordAction={setPasswordAction}
            setEmailErrorAction={setEmailErrorAction}
            setPasswordErrorAction={setPasswordErrorAction}
            eraseEmailErrorAction={eraseEmailErrorAction}
            erasePasswordErrorAction={erasePasswordErrorAction}
            changeLoggedInStateAction={changeLoggedInStateAction}
            getCityNameAction={getCityNameAction}
            getMyLocationNameAction={getMyLocationNameAction}
            // getCityName1Action={getCityName1Action}
            // getCityName2Action={getCityName2Action}
       />
    );
};


export default React.memo(SignInContainer);