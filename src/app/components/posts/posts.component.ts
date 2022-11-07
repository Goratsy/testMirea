import { Component, Input, OnInit } from '@angular/core';
import { allPosts ,IallPosts } from 'src/app/app.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  allPosts: IallPosts[] = allPosts

  constructor() { }

  ngOnInit(): void {
  }

}
