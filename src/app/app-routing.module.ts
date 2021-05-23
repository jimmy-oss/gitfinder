import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalComponent } from './goal/goal.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
 

const routes: Routes = [
   { path: 'home', component: GoalComponent},
   { path: 'about', component: AboutComponent},
   { path:'**', component:NotFoundComponent},

   
  { path: '', redirectTo:"/home", pathMatch:"full"},
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

function otherwise(arg0: { redirectTo: string; }) {
  throw new Error('Function not implemented.');
}
