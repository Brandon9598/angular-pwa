import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule,
  MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesTechnologyComponent } from './articles-technology/articles-technology.component';
import { NewsapiService } from './services/newsapi.service';
import { ArticlesJavascriptComponent } from './articles-javascript/articles-javascript.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticlesTechnologyComponent,
    ArticlesJavascriptComponent
  ],
  imports: [
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    
  ],
  providers: [
    NewsapiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
