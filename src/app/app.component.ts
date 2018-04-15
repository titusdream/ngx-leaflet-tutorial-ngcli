import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {icon, Layer, Map, marker, Marker, point, PointTuple, popup, tileLayer, Util} from 'leaflet';
import {DataService} from './data.service';
import {ConfigModel, RecordModel} from './app.model';
import {ConfigService} from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  config: ConfigModel;
  options: any;
  zoomPanOptions: any;

  records: RecordModel[];
  markers: Layer[] = [];
  itRecord: any;
  itMarker: any;

  marker: Marker;
  record: any;
  viewOffset: PointTuple;
  template: string;

  isAutoPlay: boolean = false;
  timeout: any;

  constructor(private appService: DataService, private configService: ConfigService) {
    const m = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 15,
      subdomains: ['a', 'b', 'c'],
      attribution: 'Open Street Map'
    });
    this.options = {layers: [m]};
    this.zoomPanOptions = {
      animate: true,
      duration: 1
    };
    this.record = {
      zoom: 5,
      center: [25, 3]
    };
    this.viewOffset = [-450, 200];
    this.template = '<img src="{image}"/>';


    this.initConfig(configService.getConfig());

  }

  ngOnInit() {
    this.appService.getRecords('assets/data/show.json')
        .subscribe(records => this.initData(records));
  }

  initConfig(config: ConfigModel) {
    this.config = config;
    const m = config.maps[config.mapId];
    const base = tileLayer(m.urlTemplate, m.options);
    this.options = {
      layers: [base],
    };
    this.zoomPanOptions = config.zoomPanOptions;
    this.record = config.record;
    this.viewOffset = config.viewOffset;
    this.template = config.template;
  }

  initData(records: RecordModel[]) {
    this.records = records;
    this.addMarkers();
    this.itRecord = this.makeIterator(this.records);
    this.itMarker = this.makeIterator(this.markers);
  }

  makeIterator(array) {
    let nextIndex = 0;
    return {
      next: () => {
        if (nextIndex === array.length) {
          nextIndex = 0;
        }
        return {value: array[nextIndex++]};
      }
    };
  }

  addMarkers() {
    this.records.map(loc => {
      const p = popup(
          {
            offset: point(400, 0),
            className: 'leaflet-popup-photo',
            minWidth: 600,
            closeButton: false
          })
          .setLatLng(loc.center)
          .setContent(Util.template(this.template, loc));

      const m = marker(loc.center, {
        icon: icon({
          iconSize: [45, 57],
          iconUrl: loc.icon,
          shadowUrl: 'assets/icons/shadow.png',
          shadowSize: [45, 57],
          shadowAnchor: [20, 25]
        }),
        riseOnHover: true
      }).bindPopup(p);

      this.markers.push(m);
    });
  }

  toggleAutoPlay(isAutoPlay: boolean) {
    this.isAutoPlay = !isAutoPlay;
    if (this.isAutoPlay) {
      this.playback();
    } else {
      clearTimeout(this.timeout);
    }
  }

  playback() {
    if (this.marker) {
      this.marker.closePopup();
    }

    this.marker = this.itMarker.next().value;
    this.record = this.itRecord.next().value;

    if (this.isAutoPlay) {
      this.timeout = setTimeout(() => {
        this.playback();
      }, 4000);
    }
  }

  onMapReady(map: Map) {
    console.log('onMapReady');
  }

  onMoveEnd() {
    this.marker.openPopup();
  }
}
