import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../user/services/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomerM} from "../../models/customer-m";
import {UserM} from "../../models/user-m";

@Component({
  selector: 'app-dialog-create-user',
  templateUrl: './dialog-create-user.component.html',
  styleUrls: ['./dialog-create-user.component.css']
})
export class DialogCreateUserComponent implements OnInit {

  createUserForm!: FormGroup;
  actionBtn: string = "Ajouter Utilisateur";
  title: string = "Ajout un Utilisateur";

  constructor(private formBuilder: FormBuilder,
              private user : UserService,
              @Inject(MAT_DIALOG_DATA) public editData: UserM,
              private dialogRef: MatDialogRef<DialogCreateUserComponent>) {

  }

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
        username: ['', Validators.required],
        lastname: ['', Validators.required],
        mail: ['', Validators.required],
        password: ['', Validators.required],
        phone: ['', Validators.required],
      grants: ['', Validators.required]
    })

    if (this.editData) {
      this.actionBtn = "Modifier Utilisateur";
      this.title = "Modifier l'Utilisateur";
      this.createUserForm.controls['username'].setValue(this.editData.username);
      this.createUserForm.controls['lastname'].setValue(this.editData.lastname);
      this.createUserForm.controls['mail'].setValue(this.editData.mail);
      this.createUserForm.controls['password'].setValue(this.editData.password);
      this.createUserForm.controls['phone'].setValue(this.editData.phone);
      this.createUserForm.controls['role'].setValue(this.editData.grants);
    }
  }

  addUser(){
    if (!this.editData) {
      if (this.createUserForm.valid) {
        this.user.postUser(this.createUserForm.value)
          .subscribe({
            next: () => {
              alert("Nouveau Utilisateur crée");
              this.createUserForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert("Erreur lors de la création du Client")
            }
          })
      }
    }else {
      this.updateUser();
    }
  }

  updateUser(){
    this.user.putUser(this.createUserForm.value, this.editData.id)
      .subscribe({
        next : () =>{
          alert("L'utilisateur a bien été modifié");
          this.createUserForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Erreur lors de la modification de l'utilisateur")
        }
      })
  }
}
