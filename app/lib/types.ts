export type MapData = {
  title: string;
  zoom: number;
  mapNodes: MapNode[];
};

export type MapNode = {
  position: [number, number];
  type: string;
};

export type MapNodeCategory = {
  title: string;
  types: {
    title: string;
    iconUrl: string;
  }[];
};
