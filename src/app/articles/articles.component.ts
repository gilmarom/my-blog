import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent {

    links= [{ link : 'Angular 1', href : '' },{ link: 'Style with style' , href: 'Style'  }]
}