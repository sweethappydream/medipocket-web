import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StructureComponent } from './structure.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { BrowserModule } from '@angular/platform-browser';
// import { from } from 'rxjs/internal/observable/from';
import { HeaderComponent } from '../common-components/header/header.component';
import { FooterComponent } from '../common-components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ParticlesComponent } from './particles/particles.component';
import { PharmacySavingsCardComponent } from './pharmacy-savings-card/pharmacy-savings-card.component';
import { PharmacySavingsCardForPetsComponent } from './pharmacy-savings-card-for-pets/pharmacy-savings-card-for-pets.component';
import { SavingsFinderStepOneComponent } from './savings-finder-step-one/savings-finder-step-one.component';
import { SavingsFinderStepTwoComponent } from './savings-finder-step-two/savings-finder-step-two.component';
import { SavingsFinderStepThreeComponent } from './savings-finder-step-three/savings-finder-step-three.component';
import { SavingsFinderStepFourComponent } from './savings-finder-step-four/savings-finder-step-four.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { NoCommaPipe } from '../../no-comma.pipe';
export const routes: Routes = [
  {
    path: '',
    component: StructureComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'how-it-works', component: HowItWorksComponent },
      { path: 'sign-up-form', component: SignUpFormComponent },
      { path: 'contact-us', component: ContactUsComponent },
      {
        path: 'pharmacy-savings-card',
        component: PharmacySavingsCardComponent
      },
      {
        path: 'pharmacy-savings-card-for-pets',
        component: PharmacySavingsCardForPetsComponent
      },
      {
        path: 'step1',
        component: SavingsFinderStepOneComponent
      },
      {
        path: 'step2',
        component: SavingsFinderStepTwoComponent
      },
      {
        path: 'step3',
        component: SavingsFinderStepThreeComponent
      },
      {
        path: 'step4',
        component: SavingsFinderStepFourComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    Ng4LoadingSpinnerModule.forRoot(),
    NgbModule
  ],
  declarations: [
    StructureComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HowItWorksComponent,
    ContactUsComponent,
    SignUpFormComponent,
    ParticlesComponent,
    PharmacySavingsCardComponent,
    PharmacySavingsCardForPetsComponent,
    SavingsFinderStepOneComponent,
    SavingsFinderStepTwoComponent,
    SavingsFinderStepThreeComponent,
    SavingsFinderStepFourComponent,
    NoCommaPipe
  ],
  providers: []
})
export class StructureModule { }
