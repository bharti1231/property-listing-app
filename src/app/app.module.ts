import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PropertyserviceService } from './propertyservice.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PropertyNewComponent } from './property-new/property-new.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PropertyNewComponent,
    PropertyListComponent,
    PropertyDetailsComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
     AppRoutingModule
  ],
  providers: [PropertyserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
