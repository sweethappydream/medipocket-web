import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $('app-header').removeClass('hide-header');
    $('app-footer').removeClass('hide-footer');
  }
}
