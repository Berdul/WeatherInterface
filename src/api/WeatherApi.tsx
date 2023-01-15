import { Place } from '../types/Place';

class WeatherApi {
    BASE_API_URL = 'https://api.openweathermap.org';
    API_KEY_URL_PARAM = '&appid=b6723500af8986c97fc18f609eb0eccd';

    async fetchPlaces(value: string) {
        const result = fetch(this.BASE_API_URL + '/geo/1.0/direct' + '?q=' + value + '&limit=5' + this.API_KEY_URL_PARAM)
        .then(res => res.json());
        
        return result;

    }

    async fetchTemperature(place: Place) {
        const result = fetch(this.BASE_API_URL + '/data/2.5/weather' + '?lat=' + place.latitude + '&lon=' + place.longitude + '&units=metric' + this.API_KEY_URL_PARAM)
                            .then(res => res.json());
        
        return result;
    }
}

export default WeatherApi;