import { combineReducers } from 'redux';
import landingPresentWeather from './landingPresentWeather';
import signIn from './signIn';
import signUp from './signUp';

const rootReducer = combineReducers({
    landingPresentWeather,
    signIn,
    signUp
})

export default rootReducer