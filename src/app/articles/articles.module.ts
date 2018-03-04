import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes } from '@angular/router';
import { ArticlesComponent } from '../articles/articles.component';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule , ObservableMedia} from "@angular/flex-layout";
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostService, Posts  } from './post.service';
import { FormsModule }    from '@angular/forms';

const articlesRoutes: Routes =  [
      { 
        path:'Articles',
        component: ArticlesComponent,
        children:[
           { path:'',
             component: PostListComponent,
             children:[
             { path:':id', component: PostDetailsComponent }             
             ] 
            }, 
           ]
          },         
         ]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AngularMaterialModule,
    RouterModule.forChild(articlesRoutes),
    FlexLayoutModule
  ],
  exports: [ArticlesComponent, RouterModule],
  declarations: [ArticlesComponent, PostListComponent, PostDetailsComponent],
  providers:[PostService],
  bootstrap: [ArticlesComponent]
})

export class ArticlesModule { }
