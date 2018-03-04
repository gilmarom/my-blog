import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
    constructor(private router: Router    
    ){}
    links= [{ link : 'Angular 1', href : '' },{ link: 'Style with style' , href: 'Style'  }]

    ngOnInit(){
       this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
}