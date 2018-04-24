import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressComponent} from './progress/progress.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ProgressComponent],
  declarations: [ProgressComponent],
})
export class MusicModule { }
