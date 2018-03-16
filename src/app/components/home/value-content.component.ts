import { Component, Input }  from '@angular/core';

import { valueComponent} from './value-item';


@Component({
  template: `
   <div fxLayout=row
        fxLayout.lt-md=column>
      <div class="valueBanner" style='background-image:url(../assets/images/bricks.png); width: 50%;' [ngStyle.lt-md]="{'width':'100%'}">
                
          <h3 style = 'margin-left:10%; font-family: Century Gothic, sans-serif;text-shadow: 2px 2px 8px brown;' ><strong>{{data.value}}</strong></h3>
      </div>
      <p style= 'width:300px; padding-left:10%; color:blue; font-size:18px;'>
      
         <strong>{{data.content}}</strong> 
    
      </p>
   </div>
  `,
  styleUrls: ['./home.component.css']
})
export class ValueContentComponent implements valueComponent {
  @Input() data: any;
}