import { combineReducers } from 'redux';
import fineDust from './fineDust';
import landingPresentWeather from './landingPresentWeather';
import signIn from './signIn';
import signUp from './signUp';
import myLocation from './myLocation';

const rootReducer = combineReducers({
    landingPresentWeather,
    signIn,
    signUp,
    fineDust,
    myLocation
})

export default rootReducer