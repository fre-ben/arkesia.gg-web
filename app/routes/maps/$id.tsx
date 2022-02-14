import { ClientOnly } from "remix-utils";
import MapView from "~/components/MapView.client";
import { LoaderFunction, useLoaderData, useMatches } from "remix";
import invariant from "tiny-invariant";
import { allMapData } from "~/lib/db";
import NodesSelect from "~/components/NodesSelect";
import MapSelect from "~/components/MapSelect";
import { useState } from "react";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.id, "Expected params.id");

  // Fetch markers
  const mapData =
    allMapData.find((mapData) => mapData.title === params.id) || allMapData[0];
  return mapData;
};

export default function MapPage() {
  const mapData = useLoaderData();
  const [selectedNodes, setSelectedNodes] = useState<string[]>([]);

  const mapNodes = mapData.mapNodes.filter((mapNode) =>
    selectedNodes.includes(mapNode.type)
  );

  return (
    <>
      <aside className="sidebar">
        <MapSelect />
        <NodesSelect value={selectedNodes} onChange={setSelectedNodes} />
      </aside>
      <ClientOnly>
        <MapView mapNodes={mapNodes} zoom={mapData.zoom} />
      </ClientOnly>
    </>
  );
}
