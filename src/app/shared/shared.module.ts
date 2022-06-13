import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import {IconsModule} from "../icons/icons.module";
import {RouterModule} from "@angular/router";
import { NavProfilMenuComponent } from './components/nav-profil-menu/nav-profil-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { CardCustomerComponent } from './components/card-customer/card-customer.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { CardCustomerModalComponent } from './components/card-customer-modal/card-customer-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { DialogCreateCustomerComponent } from './components/dialog-create-customer/dialog-create-customer.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        LogoComponent,
        NavMenuComponent,
        NavProfilMenuComponent,
        HeaderComponent,
        CardCustomerComponent,
        CardProductComponent,
        CardUserComponent,
        CardCustomerModalComponent,
        DialogCreateCustomerComponent
    ],
    exports: [
        LogoComponent,
        NavMenuComponent,
        NavProfilMenuComponent,
        HeaderComponent,
        CardCustomerComponent,
        CardProductComponent,
        CardUserComponent
    ],
    imports: [
        CommonModule,
        IconsModule,
        RouterModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
