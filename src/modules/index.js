import { combineReducers } from 'redux';
import fineDust from './fineDust';
import landingPresentWeather from './landingPresentWeather';
import signIn from './signIn';
import signUp from './signUp';

const rootReducer = combineReducers({
    landingPresentWeather,
    signIn,
    signUp,
    fineDust
})

export default rootReducer