import { Component, OnInit } from '@angular/core';
import { TREE_ACTIONS, KEYS, IActionMapping,ITreeOptions } from 'angular-tree-component';
@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  
})

export class TreeViewComponent  {
   
   nodes2 = [
   
    {
      title: 'src',
      className: 'root2Class',
      isExpanded: true,
      children: [
        { title: 'app', className: 'child1Class', isExpanded: true, children:[
          { title: 'components', className:'componentsClass',isExpanded: true, children: [{              
              title:'home', className:"homeComponent", children:[{
                  title:"home.component.css"},{title:"home.component.html"},{title:"home.component.spec.ts"},{title:"home.component.ts"
              }]
          },{
              title: 'contacts', className:'contactsComponents',isExpanded: true, children:[{
                  title: "conacts.component.css" },{title:"contacts.component.html"},{title:"contacts.component.spec.ts"},{title:"contacts.component.ts"
              }] 
          },{
              title: 'navbar', className:'navbarComponents',  children:[{
                  title: "navbar.component.css" },{title:"navbar.component.html"},{title:"navbar.component.spec.ts"},{title:"navbar.component.ts"
          }]
        }]
      },{
          title:'services', className:'servicesName',isExpanded: true, children:[{
                  title:'contacts.service.spec.ts'
          },{
                  title:'contacts.service.ts'
          }]
      },{
          title:'models', className:'servicesName',isExpanded: true, children:[{
                   title:'contact-submmision.service.spec.ts' 
          },{
                   title:'contact-submmision.service.ts'
          }]
      },{title:'app.component.css'},{title:'app.component.html'},{title:'app.component.spec.ts'},{ title:'app.component.ts'},{title:'app.module.ts'}] 
     }]
   }];

  basicApp = [
   
    {
      title: 'src',
      className: 'root2Class',
      isExpanded: true,
      children: [
        { title: 'app', className: 'child1Class', isExpanded: true, children:[
          { title: 'components', className:'componentsClass',isExpanded: true, children: [{              
              title:'home', className:"homeComponent", children:[{
                  title:"home.component.css"},{title:"home.component.html"},{title:"home.component.spec.ts"},{title:"home.component.ts"
              }]
          },{
              title: 'contacts', className:'contactsComponents',isExpanded: true, children:[{
                  title: "conacts.component.css" },{title:"contacts.component.html"},{title:"contacts.component.spec.ts"},{title:"contacts.component.ts"
              }] 
          },{
              title: 'navbar', className:'navbarComponents',  children:[{
                  title: "navbar.component.css" },{title:"navbar.component.html"},{title:"navbar.component.spec.ts"},{title:"navbar.component.ts"
          }]
        }]
      },{
          title:'services', className:'servicesName',isExpanded: true, children:[{
                  title:'contacts.service.spec.ts'
          },{
                  title:'contacts.service.ts'
          }]
      },{
          title:'models', className:'servicesName',isExpanded: true, children:[{
                   title:'contact-submmision.service.spec.ts' 
          },{
                   title:'contact-submmision.service.ts'
          }]
      },{title:'app.component.css'},{title:'app.component.html'},{title:'app.component.spec.ts'},{ title:'app.component.ts'},{title:'app.module.ts'}] 
     }]
   }]; 

  options1: ITreeOptions = {
    getChildren: () => new Promise((resolve, reject) => { })
  };

  options0: ITreeOptions = {
    displayField: 'title',
    nodeClass: (node) => `${node.data.title}Class`
  };


  options: ITreeOptions = {
    displayField: 'nodeName',
    isExpandedField: 'expanded',
    idField: 'uuid',
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        }
      }
    },
    nodeHeight: 23,
    allowDrag: (node) => {
      return true;
    },
    allowDrop: (node) => {
      return true;
    },
    useVirtualScroll: true,
    animateExpand: true,
    animateSpeed: 30,
    animateAcceleration: 1.2
  }
      
}