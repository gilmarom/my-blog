import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes } from '@angular/router';
import { TutorialComponent } from '../tutorial/tutorial.component';
import { StyleTutorialComponent } from './components/style-tutorial/style-tutorial.component'; 
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { Angular1Component } from './components/angular1/angular1.component';
import { FlexLayoutModule , ObservableMedia} from "@angular/flex-layout";
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TreeModule } from 'angular-tree-component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
const tutorialRoutes: Routes =  [
      
      { path:'Tutorial',
        component: TutorialComponent,
        children:[
           { path:'', component: Angular1Component } ,
           { path:'Tutorial/Tutorial-style', component: StyleTutorialComponent } ,
           { path: 'Tutorial/AngularBasic', component:Angular1Component}// angu//
        ]
   },
         
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tutorialRoutes),
    AngularMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    TreeModule,
  ],
  exports: [ TutorialComponent, StyleTutorialComponent,Angular1Component ], 
  declarations: [ TutorialComponent, StyleTutorialComponent, Angular1Component, TreeViewComponent, ReactiveFormsComponent ],
  bootstrap: [TutorialComponent]
  
})
export class TutorialModule { }
