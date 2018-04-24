import {LatLngTuple, PointTuple} from 'leaflet';

export interface RecordModel {
  id: number;
  center: LatLngTuple;
  zoom: number;
  icon: string;
  title: string;
  description: string;
  image: string;
  dir: string;
  duration: number;
  num: number;
  time: number;
  side: string;
  pos: string;
}

export interface MapModel {
  urlTemplate: string;
  options: {
    maxZoom: number;
    subdomains: string[];
    attribution ?: string;
  };
}

export interface ConfigModel {
  maps: MapModel[];
  mapId: number;
  zoomPanOptions: {
    animate: boolean;
    duration: number;
  };
  record: {
    zoom: number;
    center: LatLngTuple;
  };
  viewOffset: PointTuple;
  template: string;
  random: boolean;
}

export interface AudioModel {
  id: number;
  title: string;
  url: string;
}
