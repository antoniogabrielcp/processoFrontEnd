import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProcessoListComponent } from './processo-list/processo-list.component';
import { ProcessoFormComponent } from './processo-form/processo-form.component';
import { ProcessoService } from './service/processo.service';
import { ProcessoTramitarComponent } from './processo-tramitar/processo-tramitar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcessoListComponent,
    ProcessoFormComponent,
    ProcessoTramitarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProcessoService],
  bootstrap: [AppComponent]
})
export class AppModule { }