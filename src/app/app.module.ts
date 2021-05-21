import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalService } from './goal-service/goal.service';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    AboutComponent,
    NotFoundComponent,
     
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
    
  ],
  providers: [GoalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
