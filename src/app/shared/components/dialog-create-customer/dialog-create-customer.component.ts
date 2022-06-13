import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from "../../../customer/services/customer.service";
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CustomerM} from "../../models/customer-m";


@Component({
  selector: 'app-dialog-create-customer',
  templateUrl: './dialog-create-customer.component.html',
  styleUrls: ['./dialog-create-customer.component.css']
})
export class DialogCreateCustomerComponent implements OnInit {

  createCustomerForm!: FormGroup;
  actionBtn: string = "Ajouter Client"
  title: string = "Ajouter un Client"

  constructor(private formBuilder: FormBuilder,
              private customer : CustomerService,
              @Inject(MAT_DIALOG_DATA) public editData: CustomerM,
              private dialogRef: MatDialogRef<DialogCreateCustomerComponent>) {
  }

  ngOnInit(): void {
    this.createCustomerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mail: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      streetNumber: ['', Validators.required],
      streetType: ['', Validators.required],
      streetName: ['', Validators.required],
      streetAditional: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      status: ['', Validators.required],
      notes: ['', Validators.required]
    });

    if (this.editData) {
      this.actionBtn = "Modifier Client";
      this.title = "Modifier le Client";
      this.createCustomerForm.controls['firstname'].setValue(this.editData.firstname);
      this.createCustomerForm.controls['lastname'].setValue(this.editData.lastname);
      this.createCustomerForm.controls['mail'].setValue(this.editData.mail);
      this.createCustomerForm.controls['mobileNumber'].setValue(this.editData.mobileNumber);
      this.createCustomerForm.controls['streetNumber'].setValue(this.editData.streetNumber);
      this.createCustomerForm.controls['streetType'].setValue(this.editData.streetType);
      this.createCustomerForm.controls['streetName'].setValue(this.editData.streetName);
      this.createCustomerForm.controls['streetAditional'].setValue(this.editData.streetAditional);
      this.createCustomerForm.controls['zipCode'].setValue(this.editData.zipCode);
      this.createCustomerForm.controls['city'].setValue(this.editData.city);
      this.createCustomerForm.controls['status'].setValue(this.editData.status);
      this.createCustomerForm.controls['notes'].setValue(this.editData.notes);
    }
  }

  addCustomer() {
    if (!this.editData) {
      if (this.createCustomerForm.valid) {
        this.customer.postCustomer(this.createCustomerForm.value)
          .subscribe({
            next: () => {
              alert("Nouveau Client créé");
              this.createCustomerForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert("Erreur lors de la création du Client")
            }
          })
      }
    } else {
      this.updateCustomer()

    }
  }
  updateCustomer(){
    this.customer.putCustomer(this.createCustomerForm.value,this.editData.id)
      .subscribe({
        next:()=>{
          alert("Le client à bien été modifié");
          this.createCustomerForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Erreur lors de la modification du client !")
        }
      })
  }

}


