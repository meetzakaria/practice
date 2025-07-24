import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatCardComponent } from './mat-card/mat-card.component';
import { IndentComponent } from './indent/indent.component';

const routes: Routes = [
  {path:'mat', component:MatCardComponent},
  {path: 'indent', component:IndentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
