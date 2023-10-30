import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SignupComponent } from './components/signup/signup.component';
import { SidenavComponent } from './components/sidenav/sidenav/sidenav.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { TrashComponent } from './components/trash/trash.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { SearchComponent } from './components/search/search.component';
import { AuthenticationGuard } from './authentication.guard';
import { RemindersComponent } from './components/reminders/reminders.component';

const routes: Routes = [
  {path:'',redirectTo:"/login",pathMatch:'full'},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  {
    path: 'home', component: SidenavComponent,
    children: [{ path: 'notes', component: GetallnotesComponent },{ path: 'trash', component: TrashComponent },{ path: 'archive', component: ArchiveComponent },{path:'search',component:SearchComponent}],
    canActivate:[AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
