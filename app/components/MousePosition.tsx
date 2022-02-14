import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";

export default function MousePosition() {
  const map = useMap();
  const [latlng, setLatlng] = useState<L.LeafletMouseEvent["latlng"] | null>(
    null
  );

  useEffect(() => {
    const handleMouseMove = (event: L.LeafletMouseEvent) => {
      setLatlng(event.latlng);
    };

    const handleMouseOut = () => {
      setLatlng(null);
    };

    map.on("mousemove", handleMouseMove);
    map.on("mouseout", handleMouseOut);

    return () => {
      map.off("mousemove", handleMouseMove);
      map.off("mouseout", handleMouseOut);
    };
  }, [map]);

  if (!latlng) {
    return null;
  }

  return (
    <div className="mouse-position">
      [{latlng.lat.toFixed(2)}, {latlng.lng.toFixed(2)}]
    </div>
  );
}
