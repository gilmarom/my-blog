
import { HttpClient ,HttpRequest,} from '@angular/common/http';
import { Injectable, Input} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ContactSubmission } from '../models/contact-submission';


@Injectable()
export class ContactsService {
  contactSubmission : ContactSubmission [];
  constructor(private http: HttpClient ) {}
   
  public sendContactMsg(contactSubmission: ContactSubmission): 
    Observable<ContactSubmission> {
    return this.http.post<ContactSubmission>('api/contacts/sendContactMsg', contactSubmission);
  } 
}
