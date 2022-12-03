import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { PersonasPageComponent } from '../pages/personas-page/personas-page.component';
import { RedesignPageComponent } from '../pages/redesign-page/redesign-page.component';
import { IterativePageComponent } from '../pages/iterative-page/iterative-page.component';
import { ReactPageComponent } from '../pages/react-page/react-page.component';


const routes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path: 'personas-page', component: PersonasPageComponent},
  {path: 'redesign-page', component: RedesignPageComponent},
  {path: 'iterative-page', component: IterativePageComponent},
  {path: 'react-page', component: ReactPageComponent},
  // specifies that all empty paths should redirect to homepage (sets homepage as rootpage)
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  //redirects wrong paths to home-page
  { path: '**', redirectTo: '/home-page', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
