import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiTestComponent } from './component2/api-test/api-test.component';
import { ClientsComponent } from './components/clients/clients.component';
import { Clients2Component } from './components/clients2/clients2.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { RandomCalcComponent } from './components/random-calc/random-calc.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentComponent } from './components/student/student.component';
import { UsersComponent } from './components/users/users.component';
import { XoGameComponent } from './components/xo-game/xo-game.component';
import { ItemsStorageComponent } from './components3/items-storage/items-storage.component';


const routes: Routes = [
  {
    path:"comp1"
    ,component:Comp1Component
  },
  {
    path:"prdForm"
    ,component:ProductFormComponent
  },
  {
    path:"conditions"
    ,component:ConditionsComponent
  },
  {
    path:"clients"
    ,component:ClientsComponent
  }
,
  {
    path:"randomCalc"
    ,component:RandomCalcComponent
  }
  ,
  {
    path:"xoGame"
    ,component:XoGameComponent
  },
  { path:"",component:HomeComponent },
  { path:"list",component:ListComponent }
  ,{path:"pDetails/:id",component:ProductDetailsComponent}
  ,{path:"clients2",component:Clients2Component},
  {path:"users",component:UsersComponent},
  {path:"students",component:StudentComponent},
  {path:"students/sDetails/:id",component:StudentDetailsComponent}
  ,{path:"apiTest",component:ApiTestComponent}
  ,{path:"itemsStorage",component:ItemsStorageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
