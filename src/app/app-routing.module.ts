import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrokerAddComponent } from './broker-add/broker-add.component';
import { BrokerListComponent } from './broker-list/broker-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'addbroker', component: BrokerAddComponent },
  { path: 'brokerlist',
        component: BrokerListComponent       
      },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
