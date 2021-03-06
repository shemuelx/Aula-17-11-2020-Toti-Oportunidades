import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { FaqComponent } from './sobre/faq/faq.component';
import { HistoriaComponent } from './sobre/historia/historia.component';
import { FaleConoscoComponent } from './sobre/fale-conosco/fale-conosco.component';
import { EquipeComponent } from './sobre/equipe/equipe.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    FaqComponent,
    HistoriaComponent,
    FaleConoscoComponent,
    EquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
