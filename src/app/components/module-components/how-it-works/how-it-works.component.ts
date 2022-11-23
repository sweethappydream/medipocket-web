import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

declare var $: any;
@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {
  constructor(private titleservice: Title, private meta: Meta) {
    this.titleservice.setTitle(
      'Prescription Discount Card for FREE | Pet Prescriptions - Medipocket'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'MediPocket Rx Savings Program helps Americans Save and Increase Adherence. So, get your Prescription Discount Card for FREE and Start saving money today!'
    });
  }

  ngOnInit() {
    $('app-header').removeClass('hide-header');
    $('app-footer').removeClass('hide-footer');
  }
}
