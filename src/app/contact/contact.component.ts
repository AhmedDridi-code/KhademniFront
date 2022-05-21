import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    message: new FormControl('',[Validators.required]),

  });
  invalid=false;
  constructor(private contactService: ContactService,private router:Router) { }

  ngOnInit(): void {
    
  }

  submit(){

    if(this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactService.addContact(this.contactForm.value).subscribe(contact =>{
        this.router.navigate(['/accueil']);
      })
    }else{
      this.invalid=true;
    }

  }

}
