import { useState } from 'react'
import WeatherApi from '../api/WeatherApi';
import { Place } from '../types/Place';

const PlaceTemperature = (props: {place: Place}) => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);
    const [temperature, setTemperature] = useState<number>();
    const weatherApi = new WeatherApi();

    const fetchTemperature = () => {
        setLoading(true);
        weatherApi.fetchTemperature(props.place)
            .then(
                data => {
                    setLoaded(true);
                    setLoading(false);
                    setTemperature(data.main.temp)
                },
                error => {
                    setLoaded(true);
                    setLoaded(false);
                    setError(error);
                }
            );
    }

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (loading) {
        return <div>Loading ...</div>
    } else if (!loaded) {
        return <button onClick={() => fetchTemperature()}>Get temperature</button>
    }

    return <div>{temperature}°C</div>;
}
export default PlaceTemperature;
