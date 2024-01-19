import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admin1Component } from './pages/admin/admin1/admin1.component';
import { Admin2Component } from './pages/admin/admin2/admin2.component';
import { Test1Component } from './test1/test1.component';
import { USERComponent } from './user/user.component';

const routes: Routes = [
  { title: 'user', path: 'user', component: USERComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //forChild para subrutas
  exports: [RouterModule],
})
export class AppRoutingModule {}
