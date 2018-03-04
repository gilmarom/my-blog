import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { ActivatedRoute, ParamMap , Router, NavigationEnd} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import{  Posts, PostService  } from  '../post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  post$: Observable<Posts[]>;
  selectedId: number;
  constructor(
     private service: PostService,
     private route: ActivatedRoute,
     private router: Router
  ) { }
   
  ngOnInit() {
      this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    

      this.post$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getPost();
      });
  }

}
