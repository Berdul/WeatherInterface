export interface Place {
    name: string;
    country: string;
    state: string;
    longitude: number;
    latitude: number;
}

export const dtoToPlace = (data: any): Place => {
    return ({
        name: data.name,
        country: data.country,
        state: data.state,
        longitude: data.lon,
        latitude: data.lat,
    });
}