import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  name: string = 'John Doe';
  address: string = 'Dayton OH 45419';
  phone: string = '555-123-4567';
  email: string = 'generic@generic.com';

  constructor() { }
  ngOnInit() {
  }
}
