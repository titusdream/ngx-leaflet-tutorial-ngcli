import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-music-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  @Input() progress: number;
}
