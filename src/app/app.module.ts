import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutUsComponent } from './component/about-us/about-us.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './component/message/message.component';
import { MessageService } from './core/service/query/message.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BookLabourComponent } from './component/book-labour/book-labour.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { LoginService } from './core/service/login/login.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material/material.module';
import { ProfileComponent } from './component/profile/profile.component';
import { OrdersComponent } from './component/orders/orders.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { PriceComponent } from './component/price/price.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    FooterComponent,
    MessageComponent,
    BookLabourComponent,
    LoginComponent,
    ProfileComponent,
    OrdersComponent,
    PriceComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoadingBarRouterModule,
    NgbModule
  ],
  providers: [
    MessageService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
