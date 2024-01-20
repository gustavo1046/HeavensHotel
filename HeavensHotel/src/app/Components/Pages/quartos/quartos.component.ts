import { Component, signal, inject, OnInit } from '@angular/core';
import { NavComponent } from '../../UsualComponents/nav/nav.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CardDialogComponent } from '../../UsualComponents/dialog/card-dialog/card-dialog.component';
import { BackgroundImages } from '../../../Interfaces/IbackgroundImages';
import { Quarto } from '../../../Interfaces/Iquartos';
import { QuartoService } from '../../../Services/quarto.service';

@Component({
  selector: 'app-quartos',
  standalone: true,
  imports: [NavComponent, MatDialogModule],
  templateUrl: './quartos.component.html',
  styleUrl: './quartos.component.scss'
})
export class QuartosComponent implements OnInit{
  
  public Quartos: Quarto[] | undefined;
  
  constructor(
    public dialog: MatDialog,
    private quartoService: QuartoService
  ){
    
  }

  ngOnInit(): void{
    this.quartoService.obterTodosQuartos().subscribe((data) => {
      this.Quartos = data;
      console.log(this.Quartos);
    });
  }

  backgroundImage = signal<BackgroundImages>(
    {
      titulo: "Hotel",
      url: "../../../../assets/Img/HomePage.jpg",
      alt: "Bakcground",
      h1: "Bem vindo ao Heavens",
      h2: "O lugar onde voce encontra descanso"
    })

  OpenDialog(data: Quarto): void {
    const dialogRef = this.dialog.open(CardDialogComponent, {
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //services
}
