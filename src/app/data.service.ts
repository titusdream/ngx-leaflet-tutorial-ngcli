import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {RecordModel} from './app.model';

@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) { }

  public getRecords(path: string): Observable<RecordModel[]> {
    return this.http.get<RecordModel[]>(path);
  }

}

