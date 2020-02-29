import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CerealsModule } from './cereals/cereals.module';
import { SnacksModule } from './snacks/snacks.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    CerealsModule,
    SnacksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
