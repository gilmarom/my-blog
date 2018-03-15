import { Type } from '@angular/core';

export class valueItem {
  constructor(public component: Type<any>, public data: any) {}
}

export interface valueComponent {
  data: any;
}
