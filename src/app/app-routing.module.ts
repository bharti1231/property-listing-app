import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PropertyNewComponent } from './property-new/property-new.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { FormsModule} from '@angular/forms';
import {PropertyserviceService } from './propertyservice.service';

	
	const appRoutes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'property-list', component: PropertyListComponent },

  { path: 'property-new', component: PropertyNewComponent},
   { path: 'property-details', component: PropertyDetailsComponent},


	];

@NgModule({
exports:[RouterModule],
  imports: [
   
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
