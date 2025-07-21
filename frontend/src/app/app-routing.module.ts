import { NgModule } from '@angular/core';
import { TwoFaComponent } from  './shared/components/two-fa/two-fa.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RideRoutingModule } from './ride/ride-routing.module';
import { WalletPageComponent } from './profile-page/wallet-page/wallet-page.component';
import { RegisterComponent } from './auth/register/register.component';
import {UserNotFoundComponent} from './shared/components/user-not-found/user-not-found.component';
import {RidehistoryComponent} from './shared/components/ridehistory/ridehistory.component';
import {SimulationComponent} from './simulation/simulation-page/simulation.component';
import {StatisticsComponent} from './shared/components/statistics/statistics.component';
import {HomeComponent} from './home/home.component';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'ride', loadChildren: () => RideRoutingModule },
  { path: 'register', component: RegisterComponent },
  { path: 'two-factor', component: TwoFaComponent },
  { path: 'simulation', component: SimulationComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'wallet', component: WalletPageComponent },
  { path: 'user-not-found', component: UserNotFoundComponent },
  { path: 'history', component:RidehistoryComponent},
  { path: 'statistics', component:StatisticsComponent},
  { path: ':username', component: ProfilePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
