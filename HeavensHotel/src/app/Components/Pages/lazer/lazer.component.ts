import { Component, signal } from '@angular/core';
import { BackgroundImages } from '../../../Interfaces/IbackgroundImages';
import { NavComponent } from '../../UsualComponents/nav/nav.component';

@Component({
  selector: 'app-lazer',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './lazer.component.html',
  styleUrl: './lazer.component.scss'
})
export class LazerComponent {
  ArrayBackgroundImages = signal<BackgroundImages>(
    {
      titulo: "Lazer",
      url: "../../../../assets/Img/LazerPage.jpeg",
      alt: "Lazer",
      h1: "O lugar perfeito para o seu descanso",
      h2: "DIferentes formas de lazer"
    }
  )
}
