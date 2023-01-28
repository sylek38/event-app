import { Map } from "leaflet";

export interface MarkerProps {
    latitude: number;
    longitude: number;
}

export interface MapWithZoomType extends Map {
    _zoom?: number;
}

export enum MapTypes {
    OPENSTREET,
    SATELLITE,
}
