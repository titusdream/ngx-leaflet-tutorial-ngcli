import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {icon, Layer, Map, marker, Marker, point, popup, tileLayer, Util} from 'leaflet';
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

  records: RecordModel[];
  markers: Layer[] = [];
  itRecord: any;
  itMarker: any;

  marker: Marker;
  options: any;
  record: any;

  isAutoPlay: boolean = false;
  timeout: any;
  isShowMode: boolean = true;

  constructor(private appService: DataService, private configService: ConfigService) {
    this.initConfig(configService.getConfig());
  }

  ngOnInit() {
    this.fetchData();
  }

  initConfig(config: ConfigModel) {
    this.config = config;
    const m = config.maps[config.mapId];
    const base = tileLayer(m.urlTemplate, m.options);
    this.options = {
      layers: [base],
    };
    this.record = config.record;
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
          .setContent(Util.template(this.config.template, loc));

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

  toggleShowMode(isShowMode: boolean) {
    this.reset();
    this.isShowMode = !isShowMode;
    this.fetchData();
  }

  fetchData() {
    const d = this.isShowMode ? 'assets/data/show.json' : 'assets/data/pres.json';
    this.appService.getRecords(d).subscribe(records => this.initData(records));
  }

  reset() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.isAutoPlay = false;
    this.record = this.config.record;
    this.markers = [];
  }

  onMapReady(map: Map) {
  }

  onMoveEnd() {
    this.marker.openPopup();
  }
}
