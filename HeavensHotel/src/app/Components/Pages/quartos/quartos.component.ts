import { Component, signal, inject, OnInit } from '@angular/core';
import { NavComponent } from '../../UsualComponents/nav/nav.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CardDialogComponent } from '../../UsualComponents/dialog/card-dialog/card-dialog.component';
import { BackgroundImages } from '../../../Interfaces/IbackgroundImages';
import { Quarto } from '../../../Interfaces/Iquartos';

@Component({
  selector: 'app-quartos',
  standalone: true,
  imports: [NavComponent, MatDialogModule],
  templateUrl: './quartos.component.html',
  styleUrl: './quartos.component.scss'
})
export class QuartosComponent implements OnInit{
  constructor(
    public dialog: MatDialog
  ){

  }

  ngOnInit(): void {
  }

  backgroundImage = signal<BackgroundImages>(
    {
      titulo: "Hotel",
      url: "../../../../assets/Img/HomePage.jpg",
      alt: "Bakcground",
      h1: "Bem vindo ao Heavens",
      h2: "O lugar onde voce encontra descanso"
    })

  ArrayQuartos = signal<Quarto>(
    {
      titulo: "Suite de casal",
      descricao: "Quarto com cama de casal, banheiro, vista para a floresta na parte superiorn do Heavens, perfeito para casais",
      url: "../../../../assets/Img/suiteCasal.jpg"
    }
  )


  OpenDialog(): void {
    const dialogRef = this.dialog.open(CardDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}