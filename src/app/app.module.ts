import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PhotoService} from './data.service';
import {ConfigService} from './config.service';
import {MusicModule} from './music/music.module';
import {MusicService} from './music/music.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LeafletModule.forRoot(),
    MusicModule,
  ],
  providers: [PhotoService, MusicService, ConfigService, {
    provide: APP_INITIALIZER,
    useFactory: ConfigLoader,
    deps: [ConfigService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function ConfigLoader(configService: ConfigService): Function {
  return () => configService.load();
}
