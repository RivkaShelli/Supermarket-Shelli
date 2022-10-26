import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductModel } from 'src/app/models/product.model';
import { DialogData, ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
 
 constructor(public dialogRef: MatDialogRef<ProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data:ProductModel) { }

  ngOnInit(): void {  
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
}
