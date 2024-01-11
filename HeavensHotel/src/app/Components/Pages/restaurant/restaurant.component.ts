import { Component } from '@angular/core';
import { NavComponent } from '../../UsualComponents/nav/nav.component';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss'
})
export class RestaurantComponent {

}
