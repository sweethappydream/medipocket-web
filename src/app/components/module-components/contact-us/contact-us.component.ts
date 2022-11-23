import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';

declare var $: any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  userName: string;
  password: string;
  constructor(
    private http: HttpClient,
    private titleservice: Title,
    private meta: Meta
  ) {
    this.titleservice.setTitle(
      'Prescription Savings Card | Best Online Medicine App – Medipocket'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Get your FREE Prescription Saving Card by quick sign up! Save Up to 80% on the prescription of family and pets and get On-Demand Same Day Delivery!'
    });
  }

  ngOnInit() {
    $('app-header').removeClass('hide-header');
    $('app-footer').removeClass('hide-footer');
  }

  signIn() {
    const url =
      'https://kstrdw6014.execute-api.us-east-1.amazonaws.com/beta/auth/';
    const req = {
      username: this.userName,
      password: this.password,
      user_type: 'patient'
    };
    this.http
      .post(url, req, {
        // reportProgress: true,
        // observe: 'events'
      })
      .subscribe(res => {
        console.log(res); // handle event here
      });
  }
}
