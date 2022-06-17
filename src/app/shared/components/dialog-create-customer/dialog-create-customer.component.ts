import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from "../../../customer/services/customer.service";
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CustomerM} from "../../models/customer-m";
import {AuthService} from "../../../core/services/auth.service";
import {switchMap} from "rxjs";


@Component({
  selector: 'app-dialog-create-customer',
  templateUrl: './dialog-create-customer.component.html',
  styleUrls: ['./dialog-create-customer.component.css']
})
export class DialogCreateCustomerComponent implements OnInit {

  createCustomerForm!: FormGroup;
  actionBtn: string = "Ajouter Client";
  title: string = "Ajouter un Client";

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private customer : CustomerService,
              @Inject(MAT_DIALOG_DATA) public editData: CustomerM,
              private dialogRef: MatDialogRef<DialogCreateCustomerComponent>) {
  }

  ngOnInit(): void {
    this.createCustomerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mail: ['', Validators.required],
      mobile: ['', Validators.required],
      streetNumber: ['', Validators.required],
      streetType: ['', Validators.required],
      streetName: ['', Validators.required],
      streetAditional: [''],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      status: ['', Validators.required],
      notes: ['']
    });

    if (this.editData) {
      this.actionBtn = "Modifier Client";
      this.title = "Modifier le Client";
      this.createCustomerForm.controls['firstname'].setValue(this.editData.firstname);
      this.createCustomerForm.controls['lastname'].setValue(this.editData.lastname);
      this.createCustomerForm.controls['mail'].setValue(this.editData.mail);
      this.createCustomerForm.controls['mobile'].setValue(this.editData.mobile);
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
        this.authService.getCurrentUser$()
          .pipe(
            switchMap(user => {
              let customerToCreate = this.createCustomerForm.value as CustomerM;
              customerToCreate.dealerId = user.id;
              return this.customer.postCustomer(customerToCreate);
            })
          )
          .subscribe({
            next: (data) => {
              console.log(data);
              alert("Nouveau Client créé");
              this.createCustomerForm.reset();
              this.dialogRef.close('save');
              this.ngOnInit();
            },
            error: () => {
              alert("Erreur lors de la création du Client")
            }
          })
      }
    } else {
      this.updateCustomer();
    }
  }
  updateCustomer(){
    this.customer.putCustomer(this.createCustomerForm.value,this.editData.id)
      .subscribe({
        next:()=>{
          alert("Le client a bien été modifié");
          this.createCustomerForm.reset();
          this.dialogRef.close('update');
          this.ngOnInit();
        },
        error: () => {
          alert("Erreur lors de la modification du client !")
        }
      })
  }

}


