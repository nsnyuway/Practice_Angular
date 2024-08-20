import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component'; 
// import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  // { path: 'parent', component: ParentComponent },
  // { path: '', redirectTo: '/parent', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
