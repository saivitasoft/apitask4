import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { TaskdataComponent } from './taskdata/taskdata.component';




const routes: Routes = [
  {path:'task1',component:Task1Component},
  {path:'task2',component:Task2Component},
  {path:'task3',component:TaskdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
