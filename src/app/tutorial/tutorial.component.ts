import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {

    links= [{ link : 'Angular 1', href : '' },{ link: 'Style with style' , href: 'Style'  }]
}