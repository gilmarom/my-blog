import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { ValueDirective } from './value.directive';
import { valueItem ,valueComponent} from './value-item';



@Component({
    selector:'app-value-banner',
    template: `
          <div style='padding-top:30px;'> 
            <ng-template appValue></ng-template>
          </div>
    `,
   styleUrls: ['./home.component.css']
})

export class ValueBannerComponent implements OnInit , OnDestroy{
   @Input() vls: valueItem[];
   currentValueIndex: number = -1;
   @ViewChild(ValueDirective) vlsHost: ValueDirective;
   interval: any;

   constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

   ngOnInit(){
       this.loadComponent()
       this.getValue()
   } 

   ngOnDestroy(){
       clearInterval(this.interval);

   } 

   loadComponent() {
 
    this.currentValueIndex = (this.currentValueIndex + 1) % this.vls.length;
    let valueItem = this.vls[this.currentValueIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(valueItem.component);

    let viewContainerRef = this.vlsHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<valueComponent>componentRef.instance).data = valueItem.data;

   }

   getValue(){
      this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
   } 
   
}


