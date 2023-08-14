import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from '../Services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  title: string = 'Post';
  messageFromPost: string = "message from post";
  childMessage: string = "message from child - Post";
  outputChildMessage: string = "message from child via output - Post";
  postList: any[];

  @Input() fromParent: string;
  @Output() messageEvent = new EventEmitter<string>();

  constructor(
    private PostService: PostService
  ) {
    // let PostServiceInstance = new PostService();
    // this.postList = PostServiceInstance.postList;
    this.postList = PostService.postList;
  }

  ngOnInit() {
  }

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }
}
