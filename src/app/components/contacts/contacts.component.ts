import { Component, OnInit, AfterViewChecked, ViewChild , OnChanges} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactSubmission } from '../../models/contact-submission';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
  
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: '../assets/images/code.jpg'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  contactSubmission: ContactSubmission;
  rForm: FormGroup;
  contactForm: NgForm;
  post: any;                     // A property for our submitted form
  description: string = '';
  name: string = '';
  titleAlert:string = 'This field is required';
  email: string='';
  phone: string='';
  website: string='';
  contactModel: any={};
  submitted = false;
  charsLeft = 250;
  
  
  @ViewChild('contactForm') currentForm: NgForm;
  
  formErrors = {
    'contactName': '',
    'contactEmail': '',
    'contactMessage': ''
  };
  validationMessages = {
    'contactName': {
      'required': 'Name is required.'
    },
    'contactEmail': {
      'required': 'Email is required.',
      'email': 'Email must be in a valid format.'
    },
    'contactMessage': {
      'required': 'A message is required.'
    }
  };
  
  
  constructor(private fb: FormBuilder, private contactService: ContactsService) {
      this.contactSubmission= new ContactSubmission()
  }
  
  sendContactMsg(event){
    this.contactService.sendContactMsg(this.contactModel).subscribe()
      
}  

  createMassage() {
      this.rForm = this.fb.group({
      'name' : [this.contactSubmission.contactName, Validators.required],
      'email':[this.contactSubmission.contactEmail ,Validators.compose([Validators.email, Validators.required])],
      'phone': [this.contactSubmission.contactPhone, Validators.required], 
      'website': [this.contactSubmission.contactWebsite, Validators.required],
      'description' : [this.contactSubmission.contactMessage, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : '',
      
    });

     this.rForm.valueChanges.subscribe(data => this.onValueChanged(data));
     this.onValueChanged();
  }
     
  ngOnInit(){
     this.createMassage();
  }

   private onValueChanged(data?: any) {
    if (!this.rForm) { return; }
    const form = this.rForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && control.invalid) {
        const messages = this.validationMessages[field];
        
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
   
   submit() {

    this.contactSubmission = this.rForm.value;
    this.contactService.sendContactMsg(this.contactSubmission).
    subscribe(data => {
    this.contactSubmission = data; 
    });
    this.rForm.reset(); 
    
    console.log(JSON.stringify(this.contactSubmission));
  }
}

  