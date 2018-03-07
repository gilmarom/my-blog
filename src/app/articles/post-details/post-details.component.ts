
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,  ParamMap } from '@angular/router';
import { Posts , PostService  } from '../post.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post$: Observable<Posts>;
  editId: number;
  constructor(
     private route: ActivatedRoute,
     private router: Router,
     private service: PostService
  ) {}
  
  ngOnInit() {
     this.post$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getPosts(params.get('id')));  
 }  

}
