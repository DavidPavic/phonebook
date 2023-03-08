import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './authorization/logIn/form/form.component';
import { MenuComponent } from './core/menu/menu.component';
import { TableComponent } from './core/table/table.component';
import { SearchPipePipe } from './core/pipes/search-pipe.pipe';
import { MessageComponent } from './core/message/message.component';
import { ModalBoxComponent } from './core/modal-box/modal-box.component';
import { RouterModule } from '@angular/router';
import { AuthorizationGuard } from './core/route-guards/authorization.guard';
import { LoginService } from './core/services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MenuComponent,
    TableComponent,
    SearchPipePipe,
    MessageComponent,
    ModalBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [LoginService, AuthorizationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
