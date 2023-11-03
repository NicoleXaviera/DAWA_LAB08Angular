import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';

const routes: Routes = [
  { path: 'selector', component: SelectornumericoComponent }, // http://localhost:4200/selector
  { path: 'selector/:id', component: SelectornumericoComponent },   // http://localhost:4200/selector/1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
