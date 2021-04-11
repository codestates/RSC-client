import React, {useCallback}  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../components/Nav';
import {
    setEmail,
    setUserName,
} from '../modules/signUp';
import {
    changeLoggedInState
} from '../modules/signIn'

const NavContainer = () => {
    const isLoggedIn = useSelector(state => state.signIn.isLoggedIn);
    const dispatch = useDispatch();
    const setEmailAction = useCallback((email) => dispatch(setEmail(email)), [dispatch]);    
    const setUserNameAction = useCallback((name) => dispatch(setUserName(name)), [dispatch]);    
    const changeLoggedInStateAction = useCallback(() => dispatch(changeLoggedInState()), [dispatch]);
    
    return (
        <Nav
            isLoggedIn={isLoggedIn}
            setEmailAction={setEmailAction}
            setUserNameAction={setUserNameAction}
            changeLoggedInStateAction={changeLoggedInStateAction}
        />
    );
};

export default React.memo(NavContainer);