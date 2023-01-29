// https://positionstack.com/documentation

// Example api request:
// http://api.positionstack.com/v1/forward
//     ? access_key = YOUR_ACCESS_KEY
//     & query = 1600 Pennsylvania Ave NW, Washington DC

import { useQuery } from "@tanstack/react-query";

interface LocationType {
    administrative_area: string;
    confidence: number;
    continent: string;
    country: string;
    country_code: string;
    county: string;
    label: string;
    latitude: number;
    longitude: number;
    locality: string;
    name: string;
    neighborhood: unknown;
    number: string;
    postal_code: string;
    region: string;
    region_code: string;
    street: string;
    type: string;
}

interface MapResponse {
    data: LocationType[];
}

interface Args {
    location: string;
}

export const fetchAPIForwardGeocoding = async ({ location }: Args) => {
    try {
        const data = await fetch(
            `http://api.positionstack.com/v1/forward?access_key=${
                process.env.NEXT_PUBLIC_STICKPOINT_KEY
            }&query=${location ?? ""}`
        );

        return data.json();
    } catch (err) {
        throw err;
    }
};

export const useAPIForwardGeocoding = ({ location }: Args) =>
    useQuery<MapResponse>(
        ["forward.geocoding"],
        async () => fetchAPIForwardGeocoding({ location }),
        { enabled: false }
    );
