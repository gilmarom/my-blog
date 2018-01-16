import { Component, Input,OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-returant-list',
  templateUrl: './returant-list.component.html',
  styleUrls: ['./returant-list.component.css']
})
export class ResturantListComponent implements OnInit , OnChanges {
   @Input() showResturant: boolean;
   
   @Input() set newResturant(items){
    
  };
  
  constructor() { }
  
  ngOnInit() {
     this.showResturant = false;
  }
  ngOnChanges(changes: SimpleChanges){
    
        for (let property in changes) {
            if (property === 'showResturant') {
              console.log('Previous:', changes[property].previousValue);
              console.log('Current:', changes[property].currentValue);
              console.log('firstChange:', changes[property].firstChange);
            } 
        }
    }

}
