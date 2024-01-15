import { Component, signal } from '@angular/core';
import { NavComponent } from '../../UsualComponents/nav/nav.component';

@Component({
  selector: 'app-quartos',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './quartos.component.html',
  styleUrl: './quartos.component.scss'
})
export class QuartosComponent {
  ArrayBackgroundImages = signal(
    {
      titulo: "Quartos",
      url: "../../../../assets/Img/HomePage.jpg",
      alt: "Quartos"
    }
  )
}
