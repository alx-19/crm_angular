import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../../../order/services/order.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {OrderM} from "../../models/order-m";
import {Observable} from "rxjs";
import {UserM} from "../../models/user-m";
import {UserService} from "../../../user/services/user.service";
import {CustomerM} from "../../models/customer-m";
import {ProductM} from "../../models/product-m";
import {CustomerService} from "../../../customer/services/customer.service";
import {ProductService} from "../../../product/services/product.service";

@Component({
  selector: 'app-dialog-create-order',
  templateUrl: './dialog-create-order.component.html',
  styleUrls: ['./dialog-create-order.component.css']
})
export class DialogCreateOrderComponent implements OnInit {

  createOrderForm!: FormGroup;
  actionBtn: string = "Ajouter Commande";
  title: string ="Ajouter une Commande";
  public user$!: Observable<UserM[]>;
  public customer$!: Observable<CustomerM[]>;
  public product$!: Observable<ProductM[]>;

  constructor(private formBuilder: FormBuilder,
              private order: OrderService,
              @Inject(MAT_DIALOG_DATA) public editData: OrderM,
              private dialogRef: MatDialogRef<DialogCreateOrderComponent>,
              private user: UserService,
              private customer: CustomerService,
              private product: ProductService){

  }



  ngOnInit(): void {

    this.user$ = this.user.getCollection();
    this.customer$ = this.customer.getCollection();
    this.product$ = this.product.getCollection();

    this.createOrderForm = this.formBuilder.group({
      reference: ['', Validators.required],
      status: ['', Validators.required],
      date: ['', Validators.required],
      userId: ['', Validators.required],
      productId: ['', Validators.required],
      customerId: ['', Validators.required],
    })

    if (this.editData) {
      this.actionBtn = "Modifier Commande";
      this.title = "Modifier le Client";
      this.createOrderForm.controls['reference'].setValue(this.editData.reference);
      this.createOrderForm.controls['status'].setValue(this.editData.status);
      this.createOrderForm.controls['date'].setValue(this.editData.date);
    }
  }

  addOrder(){
    if(!this.editData){
      if(this.createOrderForm.valid) {
        this.order.postOrder(this.createOrderForm.value)
          .subscribe({
            next: () => {
              alert("Nouvelle Commande Créée");
              this.createOrderForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert("Erreur lors de la création de la Commande")
            }
          })
      }
    } else {
      this.updateOrder();
    }
  }

  updateOrder(){
    this.order.putOrder(this.createOrderForm.value,this.editData.id)
      .subscribe({
        next:()=>{
          alert("La commande a bien été modifié");
          this.createOrderForm.reset();
          this.dialogRef.close('update');
        },
        error:() => {
          alert("Erreur lors de la modification de la commande !")
        }
      })
  }

}
