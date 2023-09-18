import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthGuard } from './shared/services/auth.guard';
import { SaveGuard } from './shared/services/save.guard';

const routes: Routes = [
  {path: 'home', component: GroupListComponent, canActivate: [AuthGuard]},
  {path: 'add', component: AddStudentComponent, canActivate: [AuthGuard], canDeactivate: [SaveGuard]},
  {path: 'settings', component: SettingsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
