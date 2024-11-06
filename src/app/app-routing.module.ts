import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyComponent } from './components/property/property.component';

const routes: Routes = [
  { path: 'property', component: PropertyComponent },
  { path: '**', component: PropertyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

