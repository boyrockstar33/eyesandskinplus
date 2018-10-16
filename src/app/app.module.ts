import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



// services
import { EspService } from "./shared/services/esp.service";




import { environment } from 'environments/environment';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule, MatInputModule,MatDividerModule, MatTooltipModule,MatTabsModule,MatSelectModule,MatDialogModule ,MatButtonModule,MatAutocompleteModule,MatDatepickerModule,MatIconModule,MatNativeDateModule} from '@angular/material';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
  ],
  providers: [
    EspService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
