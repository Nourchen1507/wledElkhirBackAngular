import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { LikeComponent } from './like/like.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { InvitComponent } from './invit/invit.component';
import { DonComponent } from './don/don.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'reclamation',component:ReclamationComponent},
{path:'like',component:LikeComponent},
{path:'poste',component:PostComponent},
{path:'alarme',component:LoginComponent},
{path:'appointment',component:HomeComponent},
{path:'event',component:EventComponent},
{path:'invit',component:InvitComponent},
{path:'don',component:DonComponent},
{path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
