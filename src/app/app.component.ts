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
  username: string;
  postArray: Array<string> = ["post1", "post2", "post3"];
  objArray: Array<any> = [
    { id: 1, title: "post1", content: "content1" },
    { id: 2, title: "post2", content: "content2" },
    { id: 3, title: "post3", content: "content3" }
  ]
  // noData: boolean = false;
  isActiveStyle: boolean = true;

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

  addData($event: any) {
    let max_id = 0;
    for (let i = 0; i < this.objArray.length; i++) {
      if (this.objArray[i].id > max_id) {
        max_id = this.objArray[i].id;
      }
    }
    this.objArray.push({ id: max_id + 1, title: $event.target.value, content: "" });

  }
  deleteData(index: number) {
    this.objArray.splice(index, 1);
  }
}
