import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../product/services/product.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductM} from "../../models/product-m";

@Component({
  selector: 'app-dialog-create-product',
  templateUrl: './dialog-create-product.component.html',
  styleUrls: ['./dialog-create-product.component.css']
})
export class DialogCreateProductComponent implements OnInit {

  createProductForm!: FormGroup;
  actionBtn: string = "Ajouter Produit";
  title: string = "Ajouter un Produit";

  constructor(private formBuilder: FormBuilder,
              private product: ProductService,
              @Inject(MAT_DIALOG_DATA) public editData: ProductM,
              private dialogRef: MatDialogRef<DialogCreateProductComponent>) { }

  ngOnInit(): void {
    this.createProductForm = this.formBuilder.group({
      reference: ['', Validators.required],
      modelName: ['', Validators.required],
      dwellingType: ['', Validators.required],
      price: ['', Validators.required],
      livingSpace: ['', Validators.required],
      description: ['', Validators.required],
      urlPhoto: ['', Validators.required],
    })

    if(this.editData){
      this.actionBtn = "Modifier Produit";
      this.title = "Modifier le CLient";
      this.createProductForm.controls['modelName'].setValue(this.editData.name);
      this.createProductForm.controls['dwellingType'].setValue(this.editData.type);
      this.createProductForm.controls['price'].setValue(this.editData.priceHt);
      this.createProductForm.controls['livingSpace'].setValue(this.editData.surface);
      this.createProductForm.controls['description'].setValue(this.editData.description);
      this.createProductForm.controls['urlPhoto'].setValue(this.editData.photoUrl);
    }
  }

  addProduct(){
    if(!this.editData){
      if(this.createProductForm.valid)  {
        this.product.postProduct(this.createProductForm.value)
          .subscribe({
            next: () => {
              alert("Nouveau Produit créé");
              this.createProductForm.reset();
              this.dialogRef.close('save');
            },
            error:() => {
              alert("Erreur lors de la création du Produit")
            }
          })
      }
    } else {
      this.updateProduct();
    }
  }

  updateProduct(){
    this.product.putProduct(this.createProductForm.value, this.editData.id)
      .subscribe({
        next:()=>{
          alert("Le Produit a bien été modifié");
          this.createProductForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Erreur lors de la modification du Produit !")
        }
      })
  }
}
