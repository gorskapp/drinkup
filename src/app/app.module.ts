import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//external libs
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FavsComponent } from './favs/favs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoctailDetailsComponent } from './coctail-details/coctail-details.component';
import { ModalCoctailDetailsComponent } from './modal-coctail-details/modal-coctail-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FavsComponent,
    NotFoundComponent,
    CoctailDetailsComponent,
    ModalCoctailDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    MdbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
