import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { LetterComponent } from './letter/letter.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'success', component: SuccessComponent },
  { path: '', component: LetterComponent },
];

@NgModule({
  declarations: [AppComponent, SuccessComponent, LetterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
