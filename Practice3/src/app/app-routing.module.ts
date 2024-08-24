import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RouteGuard } from './guards/auth.guard'; 

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [RouteGuard], canLoad: [RouteGuard] },
  { path: 'about', component: AboutComponent, canActivate: [RouteGuard], canLoad: [RouteGuard] },
  { path: 'todo', component: TodoComponent, canActivate: [RouteGuard], canLoad: [RouteGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
