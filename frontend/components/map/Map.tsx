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
    marker?: MarkerProps[];
    zoom?: number;
    readOnly?: boolean;
}

const Map = ({
    center = [CONFIG_MAP.lat, CONFIG_MAP.lng],
    marker,
    zoom = CONFIG_MAP.default_zoom,
    readOnly,
}: Props) => {
    const [map, setMap] = useState<MapWithZoomType | null>();
    const [type] = useState<MapTypes>(MapTypes.OPENSTREET);

    return (
        <S.Wrapper data-type={type} className="leaflet_map_type">
            <MapContainer
                center={center}
                zoom={zoom}
                zoomControl={false}
                ref={setMap}
            >
                <LayersControl>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </LayersControl>

                {readOnly ? (
                    <Marker
                        position={[CONFIG_MAP.lat, CONFIG_MAP.lng]}
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

// TIP: used it as default export because map didn't work without that...
export default Map;
