import { Component, signal } from '@angular/core';
import { NavComponent } from '../../UsualComponents/nav/nav.component';
import { RouterLink } from '@angular/router';
import { BackgroundImages } from '../../../Interfaces/IbackgroundImages';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavComponent, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent{
  ArrayBackgroundImages = signal<BackgroundImages[]>([
    {
      titulo: "Hotel",
      url: "../../../../assets/Img/HomePage.jpg",
      alt: "Heavens Hotel",
      h1: "Bem vindo ao Heavens",
      h2: "O lugar onde voce encontra descanso"
    },
    // {
    //   titulo: "Restaurante",
    //   url: "../../../../assets/Img/Restaurant.jpg",
    //   alt: "Restaurante Heavens",
    //   h1: "Aqui voce encontra o melhor da culinária capixaba",
    //   h2: "Venha conferir!"
    // },
    // {
    //   titulo: "Restaurante",
    //   url: "../../../../assets/Img/Restaurant.jpg",
    //   alt: "Restaurante Heavens",
    //   h1: "Aqui voce encontra o melhor da culinária capixaba",
    //   h2: "Venha conferir!"
    // },
  ])
}
