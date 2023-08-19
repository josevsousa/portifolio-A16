import { Routes } from "@angular/router";
import { ContatoAddComponent } from "./contato-add/contato-add.component";
import { InicioComponent } from "../pages/inicio/inicio.component";
import { ContatoListComponent } from "./contato-list/contato-list.component";

export const contatoRouter : Routes = [
    {
        path: '',
        redirectTo: 'contato-add',
        pathMatch: 'full'
    },
    {
        path: 'contato-add',
        component: ContatoAddComponent,
        title: 'contato-add'
    },
    {
        path: 'contato-list',
        component: ContatoListComponent,
        title: 'contato-add'
    }
]