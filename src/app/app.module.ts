// angular modules //
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TreeModule } from 'angular-tree-component';

// angular matiral   //
import { FlexLayoutModule , ObservableMedia} from "@angular/flex-layout";
import { AngularMaterialModule } from './angular-material/angular-material.module';

// tutorial's modules//
import { TutorialModule } from './tutorial/tutorial.module';
import { ChartsModule } from 'ng2-charts';
// map//
import { AgmCoreModule } from '@agm/core';

// rxjs //
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/takeWhile";
import "rxjs/add/operator/startWith";

// my genrated components //
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DnaComponent } from './components/dna/dna.component';
import { StyleTutorialComponent } from './tutorial/components/style-tutorial/style-tutorial.component';
// services //
import { ContactsService } from './services/contacts.service';
import { AlertService } from './services/alert.service';
import { DnaService } from './services/dna.service';
import { FooterComponent } from './components/footer/footer.component';
import { TripComponent } from './components/trip/trip.component';
import { GoogleMapDirective } from './directives/google-map.directive';
import { AlertDirective } from './directives/alert/alert.directive';
import { AlertComponent } from './components/alert/alert.component';
import { ResturantListComponent } from './components/trip/returant-list/returant-list.component';

// Import your library
import { PrismModule } from '@sgbj/angular-prism';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-markup';
import { SidenavComponent } from './components/sidenav/sidenav.component';


const appRoutes: Routes =  [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  {path:'Trip', component: TripComponent,pathMatch: 'full'},
  {path:'Contacts', component: ContactsComponent, pathMatch: 'full'},
  {path:'Dna', component: DnaComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactsComponent,
    //TutorialComponent,
    DnaComponent,
    FooterComponent,
    TripComponent,
    GoogleMapDirective,
    AlertDirective,
    AlertComponent,
    ResturantListComponent,
    DnaComponent,
    SidenavComponent,
    
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TreeModule,
    PrismModule,
    AgmCoreModule.forRoot({
       apiKey: 'AIzaSyDFRsRIKxzaSLI-2njS5xXbdo-MfHnb5-o',
       libraries: ['places']
    }),
    AngularMaterialModule,
    TutorialModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    
  ],
  providers: [ ContactsService, AlertService, GoogleMapDirective, DnaService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
