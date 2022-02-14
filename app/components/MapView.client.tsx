import { Map } from "leaflet";
import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapNode } from "~/lib/types";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import MousePosition from "./MousePosition";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

type MapProps = {
  mapNodes: MapNode[];
  zoom: number;
};
export default function MapView({ mapNodes, zoom = 13 }: MapProps) {
  const [map, setMap] = useState<Map | null>(null);

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={[-100, 100]}
        zoom={zoom}
        whenCreated={setMap}
        crs={L.CRS.Simple}
      >
        <div className="inner-shadow" />
        <TileLayer
          url="/tiles_folder/{z}/{y}/{x}.png"
          // errorTileUrl="/tiles_folder/blank.png"
          tileSize={256}
        />
        <MousePosition />
        {mapNodes.map((mapNode) => (
          <Marker key={mapNode.position.toString()} position={mapNode.position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    ),
    [mapNodes]
  );

  useEffect(() => {
    if (map) {
      // map.setZoom(zoom);
    }
  }, [map, zoom]);

  return <>{displayMap}</>;
}
