import { Routes } from '@angular/router';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { RestaurantComponent } from './Components/Pages/restaurant/restaurant.component';
import { LazerComponent } from './Components/Pages/lazer/lazer.component';
import { QuartosComponent } from './Components/Pages/quartos/quartos.component';
import { FakePageComponent } from './Components/Pages/fake-page/fake-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'Restaurante', component: RestaurantComponent},
    {path: 'Lazer', component: LazerComponent},
    {path: 'Quartos', component: QuartosComponent},
    {path: 'Fake', component: FakePageComponent},
];
