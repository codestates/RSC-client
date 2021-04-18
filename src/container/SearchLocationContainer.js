import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchLocation from "../components/SearchLocation";

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
} from "../modules/landingPresentWeather";
import {
  getAirQualityIndex,
  getCO,
  getNO,
  getNO2,
  getO3,
  getSO2,
  getPM2_5,
  getPM10,
  getNH3,
} from "../modules/fineDust";
import { getMyLocationName, getMyLocationName2 } from "../modules/myLocation";

const SearchLocationContainer = () => {
  const dispatch = useDispatch();
  const getMyLocationNameAction = useCallback(
    (name) => dispatch(getMyLocationName(name)),
    [dispatch]
  );
  const getMyLocationNameAction2 = useCallback(
    (name) => dispatch(getMyLocationName2(name)),
    [dispatch]
  );
  const getFeelLikeTempAction = useCallback(
    (temp) => dispatch(getFeelLikeTemp(temp)),
    [dispatch]
  );
  const getHumidityAction = useCallback(
    (humidity) => dispatch(getHumidity(humidity)),
    [dispatch]
  );
  const getTempAction = useCallback((temp) => dispatch(getTemp(temp)), [
    dispatch,
  ]);
  const getTempMaxAction = useCallback(
    (tempMax) => dispatch(getTempMax(tempMax)),
    [dispatch]
  );
  const getTempMinAction = useCallback(
    (tempMin) => dispatch(getTempMin(tempMin)),
    [dispatch]
  );
  const getWeatherAction = useCallback(
    (weather) => dispatch(getWeather(weather)),
    [dispatch]
  );
  const getWeatherIconAction = useCallback(
    (weatherIcon) => dispatch(getWeatherIcon(weatherIcon)),
    [dispatch]
  );
  const getWindDegAction = useCallback(
    (windDeg) => dispatch(getWindDeg(windDeg)),
    [dispatch]
  );
  const getWindSpeedAction = useCallback(
    (windSpeed) => dispatch(getWindSpeed(windSpeed)),
    [dispatch]
  );
  const getTempDifferenceYesterdayAction = useCallback(
    (temp) => dispatch(getTempDifferenceYesterday(temp)),
    [dispatch]
  );

  const getAirQualityIndexAction = useCallback(
    (aqi) => dispatch(getAirQualityIndex(aqi)),
    [dispatch]
  );
  const getCOAction = useCallback((CO) => dispatch(getCO(CO)), [dispatch]);
  const getNOAction = useCallback((NO) => dispatch(getNO(NO)), [dispatch]);
  const getNO2Action = useCallback((NO2) => dispatch(getNO2(NO2)), [dispatch]);
  const getO3Action = useCallback((O3) => dispatch(getO3(O3)), [dispatch]);
  const getSO2Action = useCallback((SO2) => dispatch(getSO2(SO2)), [dispatch]);
  const getPM2_5Action = useCallback((PM2_5) => dispatch(getPM2_5(PM2_5)), [
    dispatch,
  ]);
  const getPM10Action = useCallback((PM10) => dispatch(getPM10(PM10)), [
    dispatch,
  ]);
  const getNH3Action = useCallback((NH3) => dispatch(getNH3(NH3)), [dispatch]);

  return (
    <SearchLocation
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
      getAirQualityIndexAction={getAirQualityIndexAction}
      getCOAction={getCOAction}
      getNOAction={getNOAction}
      getNO2Action={getNO2Action}
      getO3Action={getO3Action}
      getSO2Action={getSO2Action}
      getPM2_5Action={getPM2_5Action}
      getPM10Action={getPM10Action}
      getNH3Action={getNH3Action}
      getMyLocationNameAction={getMyLocationNameAction}
      getMyLocationNameAction2={getMyLocationNameAction2}
    />
  );
};

export default React.memo(SearchLocationContainer);
