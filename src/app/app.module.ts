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

import { StyleTutorialComponent } from './tutorial/components/style-tutorial/style-tutorial.component';
// services //
import { ContactsService } from './services/contacts.service';
import { AlertService } from './services/alert.service';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { TripComponent } from './components/trip/trip.component';
import { GoogleMapDirective } from './directives/google-map.directive';
import { AlertDirective } from './directives/alert/alert.directive';
import { AlertComponent } from './components/alert/alert.component';
import { ResturantListComponent } from './components/trip/returant-list/returant-list.component';



const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'Trip', component: TripComponent},
  {path:'Contacts', component: ContactsComponent},
  
  
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactsComponent,
    //TutorialComponent,
    AboutComponent,
    FooterComponent,
    TripComponent,
    GoogleMapDirective,
    AlertDirective,
    AlertComponent,
    ResturantListComponent,
    
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TreeModule,
    
    AgmCoreModule.forRoot({
       apiKey: 'AIzaSyDFRsRIKxzaSLI-2njS5xXbdo-MfHnb5-o',
       libraries: ['places']
    }),
    AngularMaterialModule,
    TutorialModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [ ContactsService, AlertService, GoogleMapDirective ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
