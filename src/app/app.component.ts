import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Course';
  count: number = 28598746;
  dcValue: number = 36.654789;
  price: number = 99.99;

  constructor() { }
}
