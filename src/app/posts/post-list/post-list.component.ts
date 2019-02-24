import { Component, Input, OnInit } from '@angular/core';

import { Post } from '../post.model';


@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})

export class PostListComponent{
  // posts = [
  //   {title:'Fist Post', content:'This is the first Post'},
  //   {title:'Second Post', content:'This is the second Post'},
  //   {title:'Third Post', content:'This is the third Post'},
  // ]
  @Input() posts: Post[] = [];


}
