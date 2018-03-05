

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



export class Posts{
  constructor(public id: number, public title: string,public subtitle : string, public image : string,public content : string){} 
}
const POSTS =[
  new Posts(1,'MD Micheal Fossil','cure for Alzhaimer',"../assets/images/brain.jpg", 'this story is about to end and a new story is about to begin'),
  new Posts(2,  'Prof. Roth Hershenberg', "Motazia and Dna", "../assets/images/dna.jpg", 'this story is about to end and a new story is about to begin')
] 

import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  
  static nextCrisisId = 100;
  private post$: BehaviorSubject<Posts[]> = new BehaviorSubject<Posts[]>
  (POSTS);

  getPost() { return this.post$; }

  getPosts(id: number | string) {
    return this.getPost()
      .map(post => post.find(posts => posts.id === +id));
  }
  
    
}

