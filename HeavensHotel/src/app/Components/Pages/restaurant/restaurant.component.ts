import { Component, signal } from '@angular/core';
import { NavComponent } from '../../UsualComponents/nav/nav.component';
import { BackgroundImages } from '../../../Interfaces/IbackgroundImages';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss'
})
export class RestaurantComponent {
  ArrayBackgroundImages = signal<BackgroundImages>(
    {
      titulo: "Restaurante",
      url: "../../../../assets/Img/RestauranteHomePage.jpg",
      alt: "Heavens Restaurante",
      h1: "Heavens Restaurant",
      h2: "O melhor da culinária capixaba pra voce"
    }
  )

  onSubmit(){
    console.log("foi");
  }
}