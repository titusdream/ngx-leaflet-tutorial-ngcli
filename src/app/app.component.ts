import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {icon, Layer, Map, marker, Marker, point, popup, tileLayer, Util} from 'leaflet';
import {PhotoService} from './data.service';
import {ConfigModel, RecordModel} from './app.model';
import {ConfigService} from './config.service';
import {MusicService} from './music/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

  progress: number;

  constructor(private configService: ConfigService, private photoService: PhotoService, private musicService: MusicService) {
    this.initConfig(configService.getConfig());
  }

  ngOnInit() {
    this.fetchPhoto();
    this.fetchMusic();
  }

  initConfig(config: ConfigModel) {
    this.config = config;
    const m = config.maps[config.mapId];
    const base = tileLayer(m.urlTemplate, m.options);
    this.options = {
      layers: [base],
    };
    this.record = config.record;
    this.musicService.random = this.config.random;
    this.musicService.progress.subscribe(progress => this.progress = progress);
  }

  initPhoto(records: RecordModel[]) {
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
            offset: point(450, 50),
            className: 'leaflet-popup-photo',
            minWidth: 600,
            closeButton: false
          })
          .setLatLng(loc.center)
          .setContent(Util.template(this.config.template, loc));

      const m = marker(loc.center, {
        icon: icon({
          iconSize: [45, 57],
          iconUrl: 'assets/icons/' + loc.icon + '.png',
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
      this.musicService.play();
    } else {
      clearTimeout(this.timeout);
      this.musicService.pause();
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
      }, this.record.duration * 1000);
    }
  }

  toggleShowMode(isShowMode: boolean) {
    this.reset();
    this.isShowMode = !isShowMode;
    this.fetchPhoto();
    this.fetchMusic();
  }

  fetchPhoto() {
    const d = this.isShowMode ? 'assets/data/show.json' : 'assets/data/pres.json';
    this.photoService.getRecords(d).subscribe(records => this.initPhoto(records));
  }

  fetchMusic() {
    const d = this.isShowMode ? 'assets/data/show-music.json' : 'assets/data/pres-music.json';
    this.musicService.getTracks(d);
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
