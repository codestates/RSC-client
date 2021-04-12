import React, {useCallback}  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyLocation from '../components/MyLocation';
import {
    getCityName1,
    getCityName2
} from '../modules/signIn'
import { 
    getMyLocationName,
    getMyLocationFeelLikeTemp,
    getMyLocationHumidity,
    getMyLocationTemp,
    getMyLocationTempMax,
    getMyLocationTempMin,
    getMyLocationWeather,
    getMyLocationWeatherIcon,
    getMyLocationWindDeg,
    getMyLocationWindSpeed,
    getMyLocationTempDifferenceYesterday,
    getMyLocationName2,
    getMyLocationFeelLikeTemp2,
    getMyLocationHumidity2,
    getMyLocationTemp2,
    getMyLocationTempMax2,
    getMyLocationTempMin2,
    getMyLocationWeather2,
    getMyLocationWeatherIcon2,
    getMyLocationWindDeg2,
    getMyLocationWindSpeed2,
    getMyLocationTempDifferenceYesterday2,
} from '../modules/myLocation'

const MyLocationContainer = () => {
    const isLoggedIn = useSelector(state => state.signIn.isLoggedIn);

    const myLocationName = useSelector(state => state.myLocation.myLocationName)
    const myLocationFeelLike = useSelector(state => state.myLocation.myLocationFeelLike)
    const myLocationHumidity = useSelector(state => state.myLocation.myLocationHumidity)
    const myLocationTemp = useSelector(state => state.myLocation.myLocationTemp)
    const myLocationTempMax = useSelector(state => state.myLocation.myLocationTempMax)
    const myLocationTempMin = useSelector(state => state.myLocation.myLocationTempMin)
    const myLocationWeatherDescription = useSelector(state => state.myLocation.myLocationWeatherDescription)
    const myLocationWeatherIcon = useSelector(state => state.myLocation.myLocationWeatherIcon)
    const myLocationWindeDeg = useSelector(state => state.myLocation.myLocationWindeDeg)
    const myLocationWindSpeed = useSelector(state => state.myLocation.myLocationWindSpeed)
    const myLocationTempDifferenceYesterday = useSelector(state => state.myLocation.myLocationTempDifferenceYesterday)
    //2 
    const myLocationName2 = useSelector(state => state.myLocation.myLocationName2)
    const myLocationFeelLike2 = useSelector(state => state.myLocation.myLocationFeelLike2)
    const myLocationHumidity2 = useSelector(state => state.myLocation.myLocationHumidity2)
    const myLocationTemp2 = useSelector(state => state.myLocation.myLocationTemp2)
    const myLocationTempMax2 = useSelector(state => state.myLocation.myLocationTempMax2)
    const myLocationTempMin2 = useSelector(state => state.myLocation.myLocationTempMin2)
    const myLocationWeatherDescription2 = useSelector(state => state.myLocation.myLocationWeatherDescription2)
    const myLocationWeatherIcon2 = useSelector(state => state.myLocation.myLocationWeatherIcon2)
    const myLocationWindeDeg2 = useSelector(state => state.myLocation.myLocationWindeDeg2)
    const myLocationWindSpeed2 = useSelector(state => state.myLocation.myLocationWindSpeed2)
    const myLocationTempDifferenceYesterday2 = useSelector(state => state.myLocation.myLocationTempDifferenceYesterday2)
    //
    const cityName1 = useSelector(state => state.signIn.cityName1);
    const cityName2 = useSelector(state => state.signIn.cityName2);

    const dispatch = useDispatch();
    //1
    const getMyLocationNameAction = useCallback((name) => dispatch(getMyLocationName(name)), [dispatch]);
    const getMyLocationFeelLikeTempAction = useCallback((temp) => dispatch(getMyLocationFeelLikeTemp(temp)), [dispatch]);
    const getMyLocationHumidityAction = useCallback((humidity) => dispatch(getMyLocationHumidity(humidity)), [dispatch]);
    const getMyLocationTempAction = useCallback((temp) => dispatch(getMyLocationTemp(temp)), [dispatch]);
    const getMyLocationTempMaxAction = useCallback((temp) => dispatch(getMyLocationTempMax(temp)), [dispatch]);
    const getMyLocationTempMinAction = useCallback((temp) => dispatch(getMyLocationTempMin(temp)), [dispatch]);
    const getMyLocationWeatherAction = useCallback((weather) => dispatch(getMyLocationWeather(weather)), [dispatch]);
    const getMyLocationWeatherIconAction = useCallback((icon) => dispatch(getMyLocationWeatherIcon(icon)), [dispatch]);
    const getMyLocationWindDegAction = useCallback((deg) => dispatch(getMyLocationWindDeg(deg)), [dispatch]);
    const getMyLocationWindSpeedAction = useCallback((speed) => dispatch(getMyLocationWindSpeed(speed)), [dispatch]);
    const getMyLocationTempDifferenceYesterdayAction = useCallback((temp) => dispatch(getMyLocationTempDifferenceYesterday(temp)), [dispatch]);
    //2
    const getMyLocationNameAction2 = useCallback((name) => dispatch(getMyLocationName2(name)), [dispatch]);
    const getMyLocationFeelLikeTempAction2 = useCallback((temp) => dispatch(getMyLocationFeelLikeTemp2(temp)), [dispatch]);
    const getMyLocationHumidityAction2 = useCallback((humidity) => dispatch(getMyLocationHumidity2(humidity)), [dispatch]);
    const getMyLocationTempAction2 = useCallback((temp) => dispatch(getMyLocationTemp2(temp)), [dispatch]);
    const getMyLocationTempMaxAction2 = useCallback((temp) => dispatch(getMyLocationTempMax2(temp)), [dispatch]);
    const getMyLocationTempMinAction2 = useCallback((temp) => dispatch(getMyLocationTempMin2(temp)), [dispatch]);
    const getMyLocationWeatherAction2 = useCallback((weather) => dispatch(getMyLocationWeather2(weather)), [dispatch]);
    const getMyLocationWeatherIconAction2 = useCallback((icon) => dispatch(getMyLocationWeatherIcon2(icon)), [dispatch]);
    const getMyLocationWindDegAction2 = useCallback((deg) => dispatch(getMyLocationWindDeg2(deg)), [dispatch]);
    const getMyLocationWindSpeedAction2 = useCallback((speed) => dispatch(getMyLocationWindSpeed2(speed)), [dispatch]);
    const getMyLocationTempDifferenceYesterdayAction2 = useCallback((temp) => dispatch(getMyLocationTempDifferenceYesterday2(temp)), [dispatch]);
    //
    const getCityName1Action = useCallback((city) => dispatch(getCityName1(city)), [dispatch]);
    const getCityName2Action = useCallback((city) => dispatch(getCityName2(city)), [dispatch]);


    
    
    return (
        <MyLocation
            isLoggedIn={isLoggedIn}
            //1
            myLocationName={myLocationName}
            myLocationFeelLike={myLocationFeelLike}
            myLocationHumidity={myLocationHumidity}
            myLocationTemp={myLocationTemp}
            myLocationTempMax={myLocationTempMax}
            myLocationTempMin={myLocationTempMin}
            myLocationWeatherDescription={myLocationWeatherDescription}
            myLocationWeatherIcon={myLocationWeatherIcon}
            myLocationWindeDeg={myLocationWindeDeg}
            myLocationWindSpeed={myLocationWindSpeed}
            myLocationTempDifferenceYesterday={myLocationTempDifferenceYesterday}
            //2
            myLocationName2={myLocationName2}
            myLocationFeelLike2={myLocationFeelLike2}
            myLocationHumidity2={myLocationHumidity2}
            myLocationTemp2={myLocationTemp2}
            myLocationTempMax2={myLocationTempMax2}
            myLocationTempMin2={myLocationTempMin2}
            myLocationWeatherDescription2={myLocationWeatherDescription2}
            myLocationWeatherIcon2={myLocationWeatherIcon2}
            myLocationWindeDeg2={myLocationWindeDeg2}
            myLocationWindSpeed2={myLocationWindSpeed2}
            myLocationTempDifferenceYesterday2={myLocationTempDifferenceYesterday2}
            //1
            getMyLocationNameAction={getMyLocationNameAction}
            getMyLocationFeelLikeTempAction={getMyLocationFeelLikeTempAction}
            getMyLocationHumidityAction={getMyLocationHumidityAction}
            getMyLocationTempAction={getMyLocationTempAction}
            getMyLocationTempMaxAction={getMyLocationTempMaxAction}
            getMyLocationTempMinAction={getMyLocationTempMinAction}
            getMyLocationWeatherAction={getMyLocationWeatherAction}
            getMyLocationWeatherIconAction={getMyLocationWeatherIconAction}
            getMyLocationWindDegAction={getMyLocationWindDegAction}
            getMyLocationWindSpeedAction={getMyLocationWindSpeedAction}
            getMyLocationTempDifferenceYesterdayAction={getMyLocationTempDifferenceYesterdayAction}
            //2
            getMyLocationNameAction2={getMyLocationNameAction2}
            getMyLocationFeelLikeTempAction2={getMyLocationFeelLikeTempAction2}
            getMyLocationHumidityAction2={getMyLocationHumidityAction2}
            getMyLocationTempAction2={getMyLocationTempAction2}
            getMyLocationTempMaxAction2={getMyLocationTempMaxAction2}
            getMyLocationTempMinAction2={getMyLocationTempMinAction2}
            getMyLocationWeatherAction2={getMyLocationWeatherAction2}
            getMyLocationWeatherIconAction2={getMyLocationWeatherIconAction2}
            getMyLocationWindDegAction2={getMyLocationWindDegAction2}
            getMyLocationWindSpeedAction2={getMyLocationWindSpeedAction2}
            getMyLocationTempDifferenceYesterdayAction2={getMyLocationTempDifferenceYesterdayAction2}
            //
            cityName1={cityName1}
            cityName2={cityName2}
            getCityName1Action={getCityName1Action}
            getCityName2Action={getCityName2Action}  
        />
    );
};

export default React.memo(MyLocationContainer);