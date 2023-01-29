import L from "leaflet";
import { useMapEvents } from "react-leaflet";

export const OnClickMarker = () => {
    const map = useMapEvents({
        click: () => {
            map.locate();
        },
        locationfound: (location) => {
            let marker;

            if (marker) {
                map.removeLayer(marker);
            }

            const newMarker = L.marker([
                location.latlng.lat,
                location.latlng.lng,
            ]).addTo(map);
        },
    });

    return null;
};
