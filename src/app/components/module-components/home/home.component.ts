import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  closeResult: string;
  reqPath: string;
  showDrugListData: boolean;
  drugsList: any;
  drugData: any;
  typingTimer: any; //timer identifier
  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private titleservice: Title,
    private meta: Meta
  ) {
    this.showDrugListData = false;
    this.titleservice.setTitle(
      'On Demand Medicine Delivery | Save Up to 80% On Prescriptions – MediPocket'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Why Paying Too Much For Prescriptions? Save Up to 80% on prescriptions of family and pet and bring medicine to you ON-DEMAND SAME DAY with MediPocket App.'
    });
  }
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {
    $('app-header').removeClass('hide-header');
    $('app-footer').removeClass('hide-footer');
    $(document).ready(() => {
      $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      });
    });
  }

  getDrugsList(reqPath) {
    const url =
      'https://kstrdw6014.execute-api.us-east-1.amazonaws.com/beta/rx-api/';
    const req = {
      reqPath: `GetGPI10s?search=${reqPath}&alias=MS1`,
      postData: {},
      method: 'GET'
    };
    clearTimeout(this.typingTimer);
    if (this.reqPath !== '') {
      this.typingTimer = setTimeout(() => {
        console.log('TCL: HomeComponent -> getDrugsList -> req', req);
        this.http.post(url, req, {}).subscribe(res => {
          // console.log(res);
          this.drugsList = res;
          this.drugsList = this.drugsList.drugs;
          // console.log(this.drugsList);

          this.showDrugListData = true;
        });
      }, 2000);
      console.log(reqPath);
    }
  }

  getDrugDetails(GPI10s) {
    console.log('TCL: getDrugDetails -> GPI10s', GPI10s);
    const url =
      'https://kstrdw6014.execute-api.us-east-1.amazonaws.com/beta/rx-api/';
    const req = {
      reqPath: `GetGPI14s?GPI10=${GPI10s}&alias=MS1&prediction=20&predictqty=true&predictqtyflat=false`,
      postData: {},
      method: 'GET'
    };
    console.log('TCL: HomeComponent -> getDrugsList -> req', req);
    this.http.post(url, req, {}).subscribe(res => {
      console.log(res);
      this.drugsList = [];
      this.drugData = res;
      this.drugData = this.drugData.predictions;
      console.log(this.drugData);

      // this.showDrugListData = true;
    });
  }

  scrollToElement($element): void {
    this.modalService.dismissAll();
    console.log($element);
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}
