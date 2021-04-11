import { createAction, handleActions } from 'redux-actions'

// action
//1
const GET_MY_LOCATION_NAME = 'myLocation/GET_MY_LOCATION_NAME';
const GET_MY_LOCATION_FEEL_LIKE_TEMP = 'myLocation/GET_MY_LOCATION_FELL_LIKE_TEMP';
const GET_MY_LOCATION_HUMIDITY = 'myLocation/GET_MY_LOCATION_HUMIDITY'
const GET_MY_LOCATION_TEMP = 'myLocation/GET_MY_LOCATION_TEMP';
const GET_MY_LOCATION_TEMP_MAX = 'myLocation/GET_MY_LOCATION_TEMP_MAX'
const GET_MY_LOCATION_TEMP_MIN = 'myLocation/GET_MY_LOCATION_TEMP_MIN'
const GET_MY_LOCATION_WEATHER = 'myLocation/GET_MY_LOCATION_WEATHER'
const GET_MY_LOCATION_WEATHER_ICON = 'myLocation/GET_MY_LOCATION_WEATHER_ICON'
const GET_MY_LOCATION_WIND_DEG = 'myLocation/GET_MY_LOCATION_WIND_DEG'
const GET_MY_LOCATION_WIND_SPEED = 'myLocation/GET_MY_LOCATION_WIND_SPEED'
const GET_MY_LOCATION_TEMP_DIFFERENCE_YESTERDAY = 'myLocation/GET_MY_LOCATION_TEMP_DIFFERENCE_YESTERDAY'
//2
const GET_MY_LOCATION_NAME2 = 'myLocation/GET_MY_LOCATION_NAME2'
const GET_MY_LOCATION_FEEL_LIKE_TEMP2 = 'myLocation/GET_MY_LOCATION_FELL_LIKE_TEMP2'
const GET_MY_LOCATION_HUMIDITY2 = 'myLocation/GET_MY_LOCATION_HUMIDITY2'
const GET_MY_LOCATION_TEMP2 = 'myLocation/GET_MY_LOCATION_TEMP2'
const GET_MY_LOCATION_TEMP_MAX2 = 'myLocation/GET_MY_LOCATION_TEMP_MAX2'
const GET_MY_LOCATION_TEMP_MIN2 = 'myLocation/GET_MY_LOCATION_TEMP_MIN2'
const GET_MY_LOCATION_WEATHER2 = 'myLocation/GET_MY_LOCATION_WEATHER2'
const GET_MY_LOCATION_WEATHER_ICON2 = 'myLocation/GET_MY_LOCATION_WEATHER_ICON2'
const GET_MY_LOCATION_WIND_DEG2 = 'myLocation/GET_MY_LOCATION_WIND_DEG2'
const GET_MY_LOCATION_WIND_SPEED2 = 'myLocation/GET_MY_LOCATION_WIND_SPEED2'
const GET_MY_LOCATION_TEMP_DIFFERENCE_YESTERDAY2 = 'myLocation/GET_MY_LOCATION_TEMP_DIFFERENCE_YESTERDAY2'

// action creator

//1
export const getMyLocationName = createAction(GET_MY_LOCATION_NAME)
export const getMyLocationFeelLikeTemp = createAction(GET_MY_LOCATION_FEEL_LIKE_TEMP)
export const getMyLocationHumidity = createAction(GET_MY_LOCATION_HUMIDITY)
export const getMyLocationTemp = createAction(GET_MY_LOCATION_TEMP)
export const getMyLocationTempMax = createAction(GET_MY_LOCATION_TEMP_MAX)
export const getMyLocationTempMin = createAction(GET_MY_LOCATION_TEMP_MIN)
export const getMyLocationWeather = createAction(GET_MY_LOCATION_WEATHER)
export const getMyLocationWeatherIcon = createAction(GET_MY_LOCATION_WEATHER_ICON)
export const getMyLocationWindDeg = createAction(GET_MY_LOCATION_WIND_DEG)
export const getMyLocationWindSpeed = createAction(GET_MY_LOCATION_WIND_SPEED)
export const getMyLocationTempDifferenceYesterday = createAction(GET_MY_LOCATION_TEMP_DIFFERENCE_YESTERDAY)
//2
export const getMyLocationName2 = createAction(GET_MY_LOCATION_NAME2)
export const getMyLocationFeelLikeTemp2 = createAction(GET_MY_LOCATION_FEEL_LIKE_TEMP2)
export const getMyLocationHumidity2 = createAction(GET_MY_LOCATION_HUMIDITY2)
export const getMyLocationTemp2 = createAction(GET_MY_LOCATION_TEMP2)
export const getMyLocationTempMax2 = createAction(GET_MY_LOCATION_TEMP_MAX2)
export const getMyLocationTempMin2 = createAction(GET_MY_LOCATION_TEMP_MIN2)
export const getMyLocationWeather2 = createAction(GET_MY_LOCATION_WEATHER2)
export const getMyLocationWeatherIcon2 = createAction(GET_MY_LOCATION_WEATHER_ICON2)
export const getMyLocationWindDeg2 = createAction(GET_MY_LOCATION_WIND_DEG2)
export const getMyLocationWindSpeed2 = createAction(GET_MY_LOCATION_WIND_SPEED2)
export const getMyLocationTempDifferenceYesterday2 = createAction(GET_MY_LOCATION_TEMP_DIFFERENCE_YESTERDAY2)


const initialState = {
    // 1
    myLocationName: null,
    myLocationFeelLike: null,
    myLocationHumidity: null,
    myLocationTemp: null,
    myLocationTempMax: null,
    myLocationTempMin: null,
    myLocationWeatherDescription: null,
    myLocationWeatherIcon: null,
    myLocationWindeDeg: null,
    myLocationWindSpeed: null,
    myLocationTempDifferenceYesterday: null,
    // 2
    myLocationName2: null,
    myLocationFeelLike2: null,
    myLocationHumidity2: null,
    myLocationTemp2: null,
    myLocationTempMax2: null,
    myLocationTempMin2: null,
    myLocationWeatherDescription2: null,
    myLocationWeatherIcon2: null,
    myLocationWindeDeg2: null,
    myLocationWindSpeed2: null,
    myLocationTempDifferenceYesterday2: null,
}

// reducer
const myLocation = handleActions(
    {
        // 1
        [GET_MY_LOCATION_NAME]: (state, { payload: myLocationName }) =>  ({ ...state, myLocationName }),
        [GET_MY_LOCATION_FEEL_LIKE_TEMP]: (state, { payload: myLocationFeelLike }) => ({ ...state, myLocationFeelLike }),
        [GET_MY_LOCATION_HUMIDITY]: (state, { payload: myLocationHumidity }) => ({ ...state, myLocationHumidity}),
        [GET_MY_LOCATION_TEMP]: (state, { payload: myLocationTemp })=> ({ ...state, myLocationTemp}),
        [GET_MY_LOCATION_TEMP_MAX]: (state, { payload: myLocationTempMax  }) => ({ ...state, myLocationTempMax}),
        [GET_MY_LOCATION_TEMP_MIN]: (state, { payload: myLocationTempMin  }) => ({ ...state, myLocationTempMin}),
        [GET_MY_LOCATION_WEATHER]: (state, { payload: myLocationWeatherDescription }) => ({ ...state, myLocationWeatherDescription}),
        [GET_MY_LOCATION_WEATHER_ICON]: (state, { payload: myLocationWeatherIcon  }) => ({ ...state, myLocationWeatherIcon}),
        [GET_MY_LOCATION_WIND_DEG]: (state, { payload: myLocationWindeDeg  }) => ({ ...state, myLocationWindeDeg}),
        [GET_MY_LOCATION_WIND_SPEED]: (state, { payload: myLocationWindSpeed  }) => ({ ...state, myLocationWindSpeed}),
        [GET_MY_LOCATION_TEMP_DIFFERENCE_YESTERDAY]: (state, { payload:  myLocationTempDifferenceYesterday }) => ({ ...state, myLocationTempDifferenceYesterday }),
        // 2
        [GET_MY_LOCATION_NAME2]: (state, { payload: myLocationName2 }) =>  ({ ...state, myLocationName2 }),
        [GET_MY_LOCATION_FEEL_LIKE_TEMP2]: (state, { payload: myLocationFeelLike2 }) => ({ ...state, myLocationFeelLike2 }),
        [GET_MY_LOCATION_HUMIDITY2]: (state, { payload: myLocationHumidity2 }) => ({ ...state, myLocationHumidity2}),
        [GET_MY_LOCATION_TEMP2]: (state, { payload: myLocationTemp2 })=> ({ ...state, myLocationTemp2}),
        [GET_MY_LOCATION_TEMP_MAX2]: (state, { payload: myLocationTempMax2  }) => ({ ...state, myLocationTempMax2}),
        [GET_MY_LOCATION_TEMP_MIN2]: (state, { payload: myLocationTempMin2  }) => ({ ...state, myLocationTempMin2}),
        [GET_MY_LOCATION_WEATHER2]: (state, { payload: myLocationWeatherDescription2 }) => ({ ...state, myLocationWeatherDescription2}),
        [GET_MY_LOCATION_WEATHER_ICON2]: (state, { payload: myLocationWeatherIcon2  }) => ({ ...state, myLocationWeatherIcon2}),
        [GET_MY_LOCATION_WIND_DEG2]: (state, { payload: myLocationWindeDeg2  }) => ({ ...state, myLocationWindeDeg2}),
        [GET_MY_LOCATION_WIND_SPEED2]: (state, { payload: myLocationWindSpeed2  }) => ({ ...state, myLocationWindSpeed2}),
        [GET_MY_LOCATION_TEMP_DIFFERENCE_YESTERDAY2]: (state, { payload:  myLocationTempDifferenceYesterday2 }) => ({ ...state, myLocationTempDifferenceYesterday2 })
    },
    initialState
)

export default myLocation;