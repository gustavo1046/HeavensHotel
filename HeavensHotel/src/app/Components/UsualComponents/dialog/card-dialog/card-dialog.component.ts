import { Component, Inject, OnInit, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Quarto } from '../../../../Interfaces/Iquartos';

@Component({
  selector: 'app-card-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './card-dialog.component.html',
  styleUrl: './card-dialog.component.scss'
})
export class CardDialogComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<CardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: Quarto
  ){}
  
  public getData = signal<Quarto | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  CloseDialog(): void {
    this.dialogRef.close();
  }
}
