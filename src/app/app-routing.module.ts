import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookLabourComponent } from './component/book-labour/book-labour.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MessageComponent } from './component/message/message.component';
import { OrdersComponent } from './component/orders/orders.component';
import { PriceComponent } from './component/price/price.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch:'full' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'book-labour', component: BookLabourComponent },
  { path: 'prices', component: PriceComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'message', component: MessageComponent },
  { path: 'order', component: OrdersComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
