import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';
import { FormControl, NgForm } from '@angular/forms';

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
  today: Date = new Date();
  simpleArray = ['a', 'b', 'c', 'd', 'e'];
  cityDetails: any = {
    name: 'Madrid',
    population: 3223334,
    country: 'Spain'
  }

  dummyText: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis dicta perferendis beatae, eveniet sequi consectetur commodi suscipit eligendi hic minus odit facilis molestiae in sapiente consequuntur aspernatur, ipsam dolor!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis dicta perferendis beatae, eveniet sequi  consectetur commodi suscipit eligendi hic minus odit facilis molestiae in sapiente consequuntur aspernatur, ipsam dolor!"

  constructor() { }

  ngOnInit(): void { }

  onSubmit(f: NgForm) {
    console.log(f);
    console.log(f.value);
  }

  getValue(f: any) {
    console.log(f);
  }
}
