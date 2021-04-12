import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mypage from '../components/Mypage'

import {
    setEmail,
    setUserName,
    setPassword,
} from '../modules/signUp';
import {
    getMyLocationName,
    getMyLocationName2,
} from '../modules/myLocation'

const MypageContainer = () => {
    const email = useSelector(state => state.signUp.email);
    const userName = useSelector(state => state.signUp.userName);
    const password = useSelector(state => state.signUp.password);
    const myLocationName = useSelector(state => state.myLocation.myLocationName)
    const myLocationName2 = useSelector(state => state.myLocation.myLocationName2)

    const dispatch = useDispatch();    
    const setEmailAction = useCallback((email) => dispatch(setEmail(email)), [dispatch]);    
    const setUserNameAction = useCallback((name) => dispatch(setUserName(name)), [dispatch]);    
    const setPasswordAction = useCallback((email) => dispatch(setPassword(email)), [dispatch]);
    const getMyLocationNameAction = useCallback((name) => dispatch(getMyLocationName(name)), [dispatch]);
    const getMyLocationNameAction2 = useCallback((name) => dispatch(getMyLocationName2(name)), [dispatch]);


    return (
        <Mypage 
            email={email}
            userName={userName}
            password={password}
            myLocationName={myLocationName}
            myLocationName2={myLocationName2}
            setEmailAction={setEmailAction}
            setUserNameAction={setUserNameAction}
            setPasswordAction={setPasswordAction}
            getMyLocationNameAction={getMyLocationNameAction}
            getMyLocationNameAction2={getMyLocationNameAction2}
        />
    );
};

export default React.memo(MypageContainer);