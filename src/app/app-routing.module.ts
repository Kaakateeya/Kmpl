import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'paymentdetails',
    loadChildren: './paymentdetails/paymentdetails.module#PaymentdetailsModule'
  },
    {
    path: 'astro',
    loadChildren: './astro/astro.module#AstroModule'
  },
  {
    path: 'location',
    loadChildren: './location/location.module#LocationModule'
  },
  {
    path: 'myfather',
    loadChildren: './myfather/myfather.module#MyfatherModule'
  },
  {
    path: 'mymother',
    loadChildren: './mymother/mymother.module#MymotherModule'
  },
  {
    path: 'education',
    loadChildren: './education/education.module#EducationModule'
  },
  {
    path: 'basics',
    loadChildren: './basics/basics.module#BasicsModule'
  },
  {
    path: 'contacts',
    loadChildren: './contacts/contacts.module#ContactsModule'
  },
  {
    path: 'preference',
    loadChildren: './preference/preference.module#PreferenceModule'
  },
  {
    path: 'passwordchange',
    loadChildren: './passwordchange/passwordchange.module#PasswordchangeModule'
  },
  {
    path: 'arrivaldeparture',
    loadChildren: './arrivaldeparture/arrivaldeparture.module#ArrivaldepartureModule'
  },
  {
    path: 'servicelist',
    loadChildren: './servicelist/servicelist.module#ServicelistModule'
  },
  {
    path: 'servicereport',
    loadChildren: './servicereport/servicereport.module#ServicereportModule'
  },
  {
    path: 'lastservice',
    loadChildren: './lastservice/lastservice.module#LastserviceModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
