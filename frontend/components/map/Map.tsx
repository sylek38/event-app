import { Icon, LatLngTuple } from "leaflet";
import { useState } from "react";
import {
    LayersControl,
    MapContainer,
    Marker,
    Popup,
    TileLayer,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { MapTypes, MapWithZoomType, MarkerProps } from "./mapTypes";

import * as S from "./Map.style";
import { OnClickMarker } from "./onClickMarker/OnClickMarker";

const CONFIG_MAP = {
    default_zoom: 13,
    lat: 54.36471,
    lng: 18.6483,
};

interface Props {
    center?: LatLngTuple;
    marker?: MarkerProps | null;
    zoom?: number;
}

const Map = ({
    marker,
    center = marker
        ? [marker.latitude, marker.longitude]
        : [CONFIG_MAP.lat, CONFIG_MAP.lng],
    zoom = CONFIG_MAP.default_zoom,
}: Props) => {
    const [map, setMap] = useState<MapWithZoomType | null>();
    const [type] = useState<MapTypes>(MapTypes.OPENSTREET);
    console.log(marker, "MAP COORDINATES");
    return (
        <S.Wrapper className="leaflet_map_type">
            <MapContainer
                center={center}
                zoom={zoom}
                zoomControl={false}
                ref={setMap}
            >
                <LayersControl>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </LayersControl>

                {marker ? (
                    <Marker
                        position={[marker.latitude, marker.longitude]}
                        icon={
                            new Icon({
                                iconUrl: "/marker-icon.png",
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                            })
                        }
                    >
                        <Popup>test</Popup>
                    </Marker>
                ) : (
                    <OnClickMarker />
                )}
            </MapContainer>
        </S.Wrapper>
    );
};

export default Map;
