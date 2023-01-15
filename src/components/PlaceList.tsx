import React, { useState } from 'react'
import WeatherApi from '../api/WeatherApi';
import { dtoToPlace, Place } from '../types/Place';
import PlacesTable from './PlacesTable';

const PlaceList = () => {
    const [input, setInput] = useState<string>('');
    const [inputChanged, setInputChanged] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);
    const [places, setPlaces] = useState<Place[]>([]);
    const weatherApi = new WeatherApi(); // Would rather not do that but I didn't find a proper React dependency injection method in time

    const fetchPlaces = (value: string) => {
        value = value.trim();
        if (value.length === 0) {
            setPlaces([]);
            return;
        }

        if (inputChanged) {
            weatherApi.fetchPlaces(value)
                .then(
                    (data: any) => {
                        setInputChanged(false);
                        setPlaces(data.map((place: any) => dtoToPlace(place)));
                    },
                    (error: any) => {
                        setInputChanged(false);
                        setError(error);
                });
        }
    }

    const handleChange = (event: any) => {
        const newValue = event.target.value;
        if (newValue !== input) {
            setInput(newValue);
            setInputChanged(true);
        }
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            fetchPlaces(input);
        }
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }
    return (
        <div>
            <label>Enter a place: </label>
            <input type="text"
                value={input} 
                onChange={(event) => handleChange(event)} 
                onBlur={(event) => fetchPlaces(input)}
                onKeyDown={(event) => handleKeyDown(event)}/>
                
            <PlacesTable places={places}/>
        </div>
    );
}
export default PlaceList;