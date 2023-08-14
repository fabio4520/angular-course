import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMessage: string = "message from parent";
  message: string;
  fromChildOutput: string;
  imgUrl: string = "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSm50w7rt_NzsWgLVMYU2cE1fVryZw0tOWKc1kZxjOAntfDWPmZZAiAmTvL6J_TkWbwa1uZ43utnZkXsRI"
  boolClass: boolean = true;

  @ViewChild(PostComponent) postComponent: PostComponent;

  constructor() {
    console.log(this.postComponent);
  }

  ngAfterViewInit() {
    console.log(this.postComponent);
    this.message = this.postComponent.childMessage;
  }

  receiveMessage($event: string) {
    this.fromChildOutput = $event;
  }

  buttonClick() {
    this.boolClass = !this.boolClass;
  }

  onKeyup() {
    console.log("Enter key pressed");
  }

  onKeyup2(username: string) {
    console.log(username);
  }
}
