import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { DonComponent } from './don/don.component';
import { LikeComponent } from './like/like.component';
import { EventComponent } from './event/event.component';
import { InvitComponent } from './invit/invit.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { AlarmeComponent } from './alarme/alarme.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PostComponent,
    DonComponent,
    LikeComponent,
    LoginComponent,
    EventComponent,
    InvitComponent,
    ReclamationComponent,
    AlarmeComponent,
 
    AppointmentComponent,
      LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
