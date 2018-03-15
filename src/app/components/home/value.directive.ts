import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appValue]',
})
export class ValueDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
