import { Component } from '@angular/core';
import { RestaurantComponent } from '../../Pages/restaurant/restaurant.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RestaurantComponent, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
