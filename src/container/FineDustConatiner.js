import React, {useCallback}  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FineDust from '../components/FineDust';
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
} from '../modules/fineDust'

import { 
    getCityName,
} from '../modules/landingPresentWeather'

const FineDustContainer = () => {
    const cityName = useSelector(state => state.landingPresentWeather.cityName)
    const airQualityIndex = useSelector(state => state.fineDust.airQualityIndex)
    const CO = useSelector(state => state.fineDust.CO)
    const NO = useSelector(state => state.fineDust.NO)
    const NO2 = useSelector(state => state.fineDust.NO2)
    const O3 = useSelector(state => state.fineDust.O3)
    const SO2 = useSelector(state => state.fineDust.SO2)
    const PM2_5 = useSelector(state => state.fineDust.PM2_5)
    const PM10 = useSelector(state => state.fineDust.PM10)
    const NH3 = useSelector(state => state.fineDust.NH3)
    

    const dispatch = useDispatch();
    const getCityNameAction = useCallback((name) => dispatch(getCityName(name)), [dispatch]);
    const getAirQualityIndexAction = useCallback((aqi) => dispatch(getAirQualityIndex(aqi)), [dispatch]);
    const getCOAction = useCallback((CO) => dispatch(getCO(CO)), [dispatch]);
    const getNOAction = useCallback((NO) => dispatch(getNO(NO)), [dispatch]);
    const getNO2Action = useCallback((NO2) => dispatch(getNO2(NO2)), [dispatch]);
    const getO3Action = useCallback((O3) => dispatch(getO3(O3)), [dispatch]);
    const getSO2Action = useCallback((SO2) => dispatch(getSO2(SO2)), [dispatch]);
    const getPM2_5Action = useCallback((PM2_5) => dispatch(getPM2_5(PM2_5)), [dispatch]);
    const getPM10Action = useCallback((PM10) => dispatch(getPM10(PM10)), [dispatch]);
    const getNH3Action = useCallback((NH3) => dispatch(getNH3(NH3)), [dispatch]);

    return (
        <FineDust 
            cityName={cityName}
            airQualityIndex={airQualityIndex}
            CO={CO}
            NO={NO}
            NO2={NO2}
            O3={O3}
            SO2={SO2}
            PM2_5={PM2_5}
            PM10={PM10}
            NH3={NH3}
            getCityNameAction={getCityNameAction}
            getAirQualityIndexAction={getAirQualityIndexAction}
            getCOAction={getCOAction}
            getNOAction={getNOAction}
            getNO2Action={getNO2Action}
            getO3Action={getO3Action}
            getSO2Action={getSO2Action}
            getPM2_5Action={getPM2_5Action}
            getPM10Action={getPM10Action}
            getNH3Action={getNH3Action}
        />
    );
};

export default React.memo(FineDustContainer);