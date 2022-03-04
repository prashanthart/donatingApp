import { DonorlistComponent } from './donorlist/donorlist.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateComponent } from './donate/donate.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"admin",component:AdminComponent},
  {path:"home",component:HomeComponent},
  {path:"donate",component:DonateComponent},
  {path:"about",component:AboutComponent},
  {path:"donorList",component:DonorlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
