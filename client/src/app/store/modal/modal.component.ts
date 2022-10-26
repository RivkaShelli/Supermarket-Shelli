import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void { 
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  less() {
    if (this.data.quantity != 1)
      this.data.quantity = this.data.quantity - 1;
    else
      this.data.quantity = 1;
  }
  plus() {
    this.data.quantity = this.data.quantity + 1;
  }

}
