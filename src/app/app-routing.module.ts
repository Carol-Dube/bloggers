import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';


// this constant default routes to Home, and also send all unknown path to Home
const routes: Routes = [
  { path: '', component: HomeComponent },
  // {path:'login',component: LoginComponent},
  { path: 'test', component: LoginComponent },
  { path: '', component: LoginComponent },
  
  // default route
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
