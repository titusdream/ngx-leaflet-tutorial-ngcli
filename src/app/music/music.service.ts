import {Injectable} from '@angular/core';
import {AudioModel} from '../app.model';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class MusicService {

  audio: HTMLAudioElement;
  tracks: AudioModel[];
  itTrack: any;
  track: AudioModel;
  private _random: boolean = false;
  private position = new BehaviorSubject<number>(0);
  progress = this.position.asObservable();

  constructor(private http: HttpClient) {
    this.audio = new Audio();
    this.audio.onended = this.handleEnded.bind(this);
    this.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
  }

  set random(random: boolean) {
    this._random = random;
  }

  public getTracks(path: string) {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.http.get<AudioModel[]>(path).subscribe(tracks => this.initTracks(tracks));
  }

  initTracks(tracks: AudioModel[]) {
    this.tracks = tracks;
    this.itTrack = this.makeIterator(this.tracks);
    this.nextTrack();
  }

  public nextTrack() {
    this.track = this.itTrack.next(this._random).value;
    this.audio.src = 'assets/audio/' + this.track.url;
    this.audio.load();
  }

  public play() {
    this.audio.play();
  }

  public pause() {
    this.audio.pause();
  }

  makeIterator(array) {
    let nextIndex = 0;
    return {
      next: (random) => {
        if (random) {
          nextIndex = Math.floor(Math.random() * array.length);
        } else if (nextIndex === array.length) {
          nextIndex = 0;
        }
        return {value: array[nextIndex++]};
      }
    };
  }

  handleTimeUpdate() {
    const elapsed =  this.audio.currentTime;
    const duration =  this.audio.duration;
    if (this.audio.duration) {
      this.position.next(elapsed / duration);
    }
  }

  handleEnded() {
    this.nextTrack();
    this.play();
  }
}
