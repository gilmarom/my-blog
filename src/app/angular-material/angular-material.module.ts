import {NgModule} from '@angular/core';

import { 
  MatSlideToggleModule,
  MatInputModule,
  MatCardModule, 
  MatMenuModule, 
  MatSidenavModule,
  MatIconModule, 
  MatListModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatToolbarModule,
  MatGridListModule,
} from '@angular/material';

import { PlatformModule } from '@angular/cdk/platform';
import { ObserversModule } from '@angular/cdk/observers';

/**
 * NgModule that includes all Material modules that are required to serve the app.
 */
@NgModule({
  exports: [
    MatSlideToggleModule,
    MatInputModule,
    ObserversModule,
    PlatformModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, 
    MatProgressSpinnerModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule  
  ]
})

export class AngularMaterialModule { }
