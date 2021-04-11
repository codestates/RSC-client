import { createAction, handleActions } from 'redux-actions';

const GET_AIR_QUALITY_INDEX = "fineDust/GET_AIR_QUALITY_INDEX";
const GET_CO = "fineDust/GET_CO";
const GET_NO = "fineDust/GET_NO";
const GET_NO2 = "fineDust/GET_NO2";
const GET_O3 = "fineDust/GET_O3";
const GET_SO2 = "fineDust/GET_SO2";
const GET_PM2_5 = "fineDust/GET_PM2_5";
const GET_PM10 = "fineDust/GET_PM10";
const GET_NH3 = "fineDust/GET_NH3";

export const getAirQualityIndex = createAction(GET_AIR_QUALITY_INDEX)
export const getCO = createAction(GET_CO)
export const getNO = createAction(GET_NO)
export const getNO2 = createAction(GET_NO2)
export const getO3 = createAction(GET_O3)
export const getSO2 = createAction(GET_SO2)
export const getPM2_5 = createAction(GET_PM2_5)
export const getPM10 = createAction(GET_PM10)
export const getNH3 = createAction(GET_NH3)

const initialState = {
    airQualityIndex: null,
    CO: null,
    NO: null,
    NO2: null,
    O3: null,
    SO2: null,
    PM2_5: null,
    PM10: null,
    NH3: null,
}

const fineDust = handleActions(
    {
        [GET_AIR_QUALITY_INDEX]: (state, { payload: airQualityIndex}) => ({ ...state, airQualityIndex }),
        [GET_CO]: (state, { payload: CO}) => ({ ...state, CO }),
        [GET_NO]: (state, { payload: NO}) => ({ ...state, NO }),
        [GET_NO2]: (state, { payload: NO2}) => ({ ...state, NO2 }),
        [GET_O3]: (state, { payload: O3}) => ({ ...state, O3 }),
        [GET_SO2]: (state, { payload: SO2}) => ({ ...state, SO2 }),
        [GET_PM2_5]: (state, { payload: PM2_5}) => ({ ...state, PM2_5 }),
        [GET_PM10]: (state, { payload: PM10}) => ({ ...state, PM10 }),
        [GET_NH3]: (state, { payload: NH3}) => ({ ...state, NH3 }),
    },
    initialState
)

export default fineDust;