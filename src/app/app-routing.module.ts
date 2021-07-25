import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { SignupAndLoginComponent } from './signup-and-login/signup-and-login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'article',
    component: ArticleComponent
  },
  {
    path: 'login',
    component: SignupAndLoginComponent
  },
  {
    path: 'signup',
    component: SignupAndLoginComponent
  },
  {
    path: '**',
    component: HomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
