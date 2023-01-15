import React from 'react'
import { Place } from '../types/Place';
import PlaceTemperature from './PlaceTemperature';

const PlacesTable = (props: {places: Place[]}) => {
    if (props?.places.length === 0) {
        return <h3>No data to display.</h3>;
    }

    return (
        <table style={{ width: 500 }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>Temperature</th>
                </tr>
            </thead>
            <tbody>
                {props?.places?.map((place: Place, index) => 
                    <tr key={index}>
                        <td>{place.name}</td>
                        <td>{place.country}</td>
                        <td>{place.state}</td>
                        <td><PlaceTemperature place={place} /></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default PlacesTable;