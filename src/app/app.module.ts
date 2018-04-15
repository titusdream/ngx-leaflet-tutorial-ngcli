import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import {ConfigService} from './config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LeafletModule.forRoot()
  ],
  providers: [DataService, ConfigService, {
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