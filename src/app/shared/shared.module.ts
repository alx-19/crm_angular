import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import {IconsModule} from "../icons/icons.module";
import {RouterModule} from "@angular/router";
import { NavProfilMenuComponent } from './components/nav-profil-menu/nav-profil-menu.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
    declarations: [
        LogoComponent,
        NavMenuComponent,
        NavProfilMenuComponent,
        HeaderComponent
    ],
    exports: [
        LogoComponent,
        NavMenuComponent,
        NavProfilMenuComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        IconsModule,
        RouterModule
    ]
})
export class SharedModule { }
