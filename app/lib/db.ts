import { MapData, MapNodeCategory } from "./types";

export const nodeCategories: MapNodeCategory[] = [
  {
    title: "Locations",
    types: [
      {
        title: "Area",
        iconUrl: "",
      },
      {
        title: "Dungeon",
        iconUrl: "",
      },
      {
        title: "Portal",
        iconUrl: "",
      },
    ],
  },
  {
    title: "Services",
    types: [
      {
        title: "Crafting",
        iconUrl: "",
      },
    ],
  },
];

export const allMapData: MapData[] = [
  {
    title: "Arkesia World Map",
    zoom: 3,
    mapNodes: [
      {
        type: "Area",
        position: [51.505, -0.09],
      },
      {
        type: "Area",
        position: [51.506, -0.08],
      },
    ],
  },
  {
    title: "Rethramis",
    zoom: 2,
    mapNodes: [
      {
        type: "Area",
        position: [51.51, -0.09],
      },
    ],
  },
  {
    title: "Luterra West",
    zoom: 4,
    mapNodes: [],
  },
  {
    title: "Luterra East",
    zoom: 3,
    mapNodes: [
      {
        type: "Area",
        position: [51.511, -0.01],
      },
    ],
  },
  //   {
  //     title: "Tortoyk",
  //   },
  //   {
  //     title: "Anikka",
  //   },
  //   {
  //     title: "Arthetine",
  //   },
  //   {
  //     title: "Vern North",
  //   },
  //   {
  //     title: "Shushire",
  //   },
  //   {
  //     title: "Rohendel",
  //   },
  //   {
  //     title: "Yorn",
  //   },
];
