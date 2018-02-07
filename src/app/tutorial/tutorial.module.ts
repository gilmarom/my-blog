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
import { NodePythonComponent } from './components/node-python/node-python.component';
// code blocks//
import { PrismModule } from '@sgbj/angular-prism';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-haml';
const tutorialRoutes: Routes =  [
      
      { path:'Tutorial',
        component: TutorialComponent,
        children:[
           { path:'', component: Angular1Component } ,
           { path:'Tutorial/Tutorial-style', component: StyleTutorialComponent } ,
           { path: 'Tutorial/AngularBasic', component:Angular1Component},
           { path: 'Tutorial/Node-python', component:NodePythonComponent}
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
    PrismModule,

  ],
  exports: [ TutorialComponent, StyleTutorialComponent,Angular1Component ], 
  declarations: [ TutorialComponent, StyleTutorialComponent, Angular1Component, TreeViewComponent, ReactiveFormsComponent, NodePythonComponent ],
  bootstrap: [TutorialComponent]
  
})
export class TutorialModule { }