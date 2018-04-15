import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigModel} from './app.model';

@Injectable()
export class ConfigService {

  private _config: ConfigModel = null;

  constructor(private http: HttpClient) {
  }

  public getConfig(): ConfigModel {
    return this._config;
  }

  // APP_INITIALIZER only support Promise
  public load(): Promise<ConfigModel> {
    return new Promise<ConfigModel>((resolve: any) => {
      this.http.get<ConfigModel>('assets/config.json').subscribe(config => {
        this._config = config;
        resolve(true);
      });
    });
  }

}

