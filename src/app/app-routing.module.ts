import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [{
  path:'movie-details/:id',
  component:MovieDetailsComponent
},
{
  path:'movie-list',
  component:MovieListComponent
},
{
path:"login",
component: LoginComponent
},

{
  path:"register",
  component: RegisterComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
