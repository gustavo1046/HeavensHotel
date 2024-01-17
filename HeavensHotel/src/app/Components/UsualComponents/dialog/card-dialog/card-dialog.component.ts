import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

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
  ){}


  ngOnInit(): void {
  }

  CloseDialog(): void {
    this.dialogRef.close();
  }
}
