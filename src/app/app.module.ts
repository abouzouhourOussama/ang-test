import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemsComponent } from './components/items/items.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { ClientsComponent } from './components/clients/clients.component';
import { RandomCalcComponent } from './components/random-calc/random-calc.component';
import { XoGameComponent } from './components/xo-game/xo-game.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { Clients2Component } from './components/clients2/clients2.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './components/student/student.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { ApiTestComponent } from './component2/api-test/api-test.component';
import { ItemsStorageComponent } from './components3/items-storage/items-storage.component';
import { WeatherComponent } from './components/weather/weather.component';
import { Weather2Component } from './components3/weather2/weather2.component';
import { TodoListComponent } from './components3/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    HeaderComponent,
    FooterComponent,
    ItemsComponent,
    GalleryComponent,
    ProductFormComponent,
    ConditionsComponent,
    ClientsComponent,
    RandomCalcComponent,
    XoGameComponent,
    HomeComponent,
    ListComponent,
    ProductDetailsComponent,
    Clients2Component,
    UsersComponent,
    StudentComponent,
    StudentDetailsComponent,
    ApiTestComponent,
    ItemsStorageComponent,
    WeatherComponent,
    Weather2Component,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
