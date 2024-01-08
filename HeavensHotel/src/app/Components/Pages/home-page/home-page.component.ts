import { Component } from '@angular/core';
import { NavComponent } from '../../UsualComponents/nav/nav.component';
import { PainelComponent } from '../../UsualComponents/painel/painel.component';
import { RestauranteComponent } from '../../UsualComponents/restaurante/restaurante.component';
import { LazerComponent } from '../../UsualComponents/lazer/lazer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavComponent, PainelComponent, RestauranteComponent, LazerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
