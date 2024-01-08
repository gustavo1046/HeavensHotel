import { Component } from '@angular/core';

@Component({
  selector: 'app-lazer',
  standalone: true,
  imports: [],
  templateUrl: './lazer.component.html',
  styleUrl: './lazer.component.scss'
})
export class LazerComponent {
  images = [
    {url: '../../../../assets/Img/Bar.jpg',
     alt:"Bar"},
    {url: '../../../../assets/Img/Pool.jpg',
    alt:"Piscina"},
    {url: '../../../../assets/Img/climb.jpg',
    alt:"Montanha"},
  ]
}
