import React, {useCallback}  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchLocation from '../components/SearchLocation';
import { 
    getCityName,
    getAirQualityIndex,
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

const SearchLocationContainer = () => {
    const dispatch = useDispatch();
    const getCityNameAction = useCallback((name) => dispatch(getCityName(name)), [dispatch]);
    const getAirQualityIndexAction = useCallback((index) => dispatch(getAirQualityIndex(index)), [dispatch]);
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
        <SearchLocation 
            getCityNameAction={getCityNameAction}
            getAirQualityIndexAction={getAirQualityIndexAction}
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

export default React.memo(SearchLocationContainer);