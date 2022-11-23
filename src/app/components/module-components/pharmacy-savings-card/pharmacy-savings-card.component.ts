import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
declare var $: any;
@Component({
  selector: 'app-pharmacy-savings-card',
  templateUrl: './pharmacy-savings-card.component.html',
  styleUrls: ['./pharmacy-savings-card.component.scss']
})
export class PharmacySavingsCardComponent implements OnInit {
  successMessage: boolean = false;
  constructor(private http: HttpClient, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    $('app-header').removeClass('hide-header');
    $('app-footer').removeClass('hide-footer');
    $(document).ready(function () {
      $('.mfp-form').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var modalTarget = $(this).attr('data-modal-target');
        // alert('#' + modalTarget);
        $('.mfp-bg').addClass('active');
        $('.mpf-modal-wrap #' + modalTarget)
          .parents('.mpf-modal-wrap')
          .addClass('active');
        // $('#' + modalTarget).toggleClass('active');
      });
      $('.mfp-overlay').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
      });
      $('.mfp-close').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.mfp-bg').removeClass('active');
        $(this)
          .parents('.mpf-modal-wrap')
          .removeClass('active');
      });
    });
  }

  sendMailforpeople() {
    // this.spinnerService.show();
    // const url =
    //   'https://kstrdw6014.execute-api.us-east-1.amazonaws.com/beta/rx-api/';
    // const req = {
    //   "reqPath": "GetPrices",
    //   "postData": {
    //     "radius": 10,
    //     "pharmAlias": "P2",
    //     "unc": [
    //       "unc"
    //     ],
    //     "medications": arr,
    //     "mode": "rollup",
    //     "lat": this.myLatLng.lat,
    //     "lng": this.myLatLng.lng,
    //   },
    //   "method": "POST"
    // };
    // this.http.post(url, req, {}).subscribe(res => {
    //   this.spinnerService.hide();
    //   console.log(res);
    console.log('working');
    this.successMessage = true;
    // },
    //   err => {
    //     var err = err.json();
    //     this.spinnerService.hide();
    //   }
    // );
  }
}
