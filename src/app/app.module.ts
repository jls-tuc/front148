import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// modulos
import { Pagesmodule } from './pages/pages.module';

// rutas
import { AppRoutingModule } from './app-routing.module';

// componentes

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Pagesmodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
