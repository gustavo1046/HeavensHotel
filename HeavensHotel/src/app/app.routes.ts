import { Routes } from '@angular/router';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { RestaurantComponent } from './Components/Pages/restaurant/restaurant.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'Restaurante', component: RestaurantComponent},
];
