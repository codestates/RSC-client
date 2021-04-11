import React, {useCallback}  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyLocation from '../components/MyLocation';
import { 
    getFeelLikeTemp,
    getHumidity,
    getTemp,
    getTempMax,
    getTempMin,
    getWeather,
    getWeatherIcon,
    getWindDeg,
    getWindSpeed,
    getTempDifferenceYesterday,
} from '../modules/landingPresentWeather'

const MyLocationContainer = () => {
    const airQualityIndex = useSelector(state => state.landingPresentWeather.airQualityIndex)
    const feelLike = useSelector(state => state.landingPresentWeather.feelLike)
    const humidity = useSelector(state => state.landingPresentWeather.humidity)
    const temp = useSelector(state => state.landingPresentWeather.temp)
    const tempMax = useSelector(state => state.landingPresentWeather.tempMax)
    const tempMin = useSelector(state => state.landingPresentWeather.tempMin)
    const weatherDescription = useSelector(state => state.landingPresentWeather.weatherDescription)
    const weatherIcon = useSelector(state => state.landingPresentWeather.weatherIcon)
    const windDeg = useSelector(state => state.landingPresentWeather.windDeg)
    const windSpeed = useSelector(state => state.landingPresentWeather.windSpeed)
    const tempDifferenceYesterday = useSelector(state => state.landingPresentWeather.tempDifferenceYesterday)
    const isLoggedIn = useSelector(state => state.signIn.isLoggedIn);


    const dispatch = useDispatch();
    const getFeelLikeTempAction = useCallback((temp) => dispatch(getFeelLikeTemp(temp)), [dispatch]);
    const getHumidityAction = useCallback((humidity) => dispatch(getHumidity(humidity)), [dispatch]);
    const getTempAction = useCallback((temp) => dispatch(getTemp(temp)), [dispatch]);
    const getTempMaxAction = useCallback((tempMax) => dispatch(getTempMax(tempMax)), [dispatch]);
    const getTempMinAction = useCallback((tempMin) => dispatch(getTempMin(tempMin)), [dispatch]);
    const getWeatherAction = useCallback((weather) => dispatch(getWeather(weather)), [dispatch]);
    const getWeatherIconAction = useCallback((weatherIcon) => dispatch(getWeatherIcon(weatherIcon)), [dispatch]);
    const getWindDegAction = useCallback((windDeg) => dispatch(getWindDeg(windDeg)), [dispatch]);
    const getWindSpeedAction = useCallback((windSpeed) => dispatch(getWindSpeed(windSpeed)), [dispatch]);
    const getTempDifferenceYesterdayAction = useCallback((temp) => dispatch(getTempDifferenceYesterday(temp)), [dispatch]);
    return (
        <MyLocation
            isLoggedIn={isLoggedIn}
            airQualityInde={airQualityIndex}
            feelLike={feelLike}
            humidity={humidity}
            temp={temp}
            tempMax={tempMax}
            tempMin={tempMin}
            weatherDescription={weatherDescription}
            weatherIcon={weatherIcon}
            windDeg={windDeg}
            windSpeed={windSpeed}
            tempDifferenceYesterday={tempDifferenceYesterday}
            getFeelLikeTempAction={getFeelLikeTempAction}
            getHumidityAction={getHumidityAction}
            getTempAction={getTempAction}
            getTempMaxAction={getTempMaxAction}
            getTempMinAction={getTempMinAction}
            getWeatherAction={getWeatherAction}
            getWeatherIconAction={getWeatherIconAction}
            getWindDegAction={getWindDegAction}
            getWindSpeedAction={getWindSpeedAction}
            getTempDifferenceYesterdayAction={getTempDifferenceYesterdayAction}
        />
    );
};

export default React.memo(MyLocationContainer);