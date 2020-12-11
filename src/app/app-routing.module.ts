import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessoListComponent } from './processo-list/processo-list.component';
import { ProcessoFormComponent } from './processo-form/processo-form.component';
import { ProcessoTramitarComponent } from './processo-tramitar/processo-tramitar.component';

const routes: Routes = [
  { path: 'processos', component: ProcessoListComponent },
  { path: 'addprocesso', component: ProcessoFormComponent },
  { path: 'tramitarprocesso/:id', component: ProcessoTramitarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }