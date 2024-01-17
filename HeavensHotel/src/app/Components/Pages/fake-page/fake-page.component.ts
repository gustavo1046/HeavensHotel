import { Component, inject, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CardDialogComponent } from '../../UsualComponents/dialog/card-dialog/card-dialog.component';
import { ECardDialogPanelClass } from '../../../enum/ECardDialogPanelClass';

@Component({
  selector: 'app-fake-page',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './fake-page.component.html',
  styleUrl: './fake-page.component.scss'
})
export class FakePageComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CardDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
