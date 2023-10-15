import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Angular material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';

import { RegistrarProductoScreenComponent } from './screens/registrar-producto-screen/registrar-producto-screen.component';

import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegistroScreenComponent,
    HomeScreenComponent,
    RegistrarProductoScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
