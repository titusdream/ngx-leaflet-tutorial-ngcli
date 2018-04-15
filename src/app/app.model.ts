import {LatLngTuple, PointTuple} from 'leaflet';

export interface RecordModel {
  id: number;
  title: string;
  time: string;
  center: LatLngTuple;
  zoom: number;
  image: string;
  icon: string;
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
}
