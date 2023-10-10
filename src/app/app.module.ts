import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './components/sidenav/sidenav/sidenav.component';
import {MatSidenavModule,MatDrawerMode} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { DisplayComponent } from './components/display/display.component';
import { IconsComponent } from './components/icons/icons.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SearchComponent } from './components/search/search.component';
import { SearchfilterPipe } from './pipes/searchfilter.pipe';
import { RemindersComponent } from './components/reminders/reminders.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    SidenavComponent,
    CreateNoteComponent,
    GetallnotesComponent,
    DisplayComponent,
    IconsComponent,
    ArchiveComponent,
    TrashComponent,
    UpdatenoteComponent,
    SearchComponent,
    SearchfilterPipe,
    RemindersComponent
  ],
  imports: [
    BrowserModule,MatMenuModule,
    AppRoutingModule,HttpClientModule,MatSidenavModule,MatListModule,MatToolbarModule,FormsModule,MatDialogModule,
    BrowserAnimationsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule,MatSelectModule,MatCheckboxModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
