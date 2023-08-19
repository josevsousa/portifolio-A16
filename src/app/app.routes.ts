import { Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: InicioComponent,
        title: 'inicio-component'
    },
    {
        path: 'sobre',
        component: SobreComponent,
        title: 'sobre-component'
    },
    {
        path: 'projetos',
        component: ProjetosComponent,
        title: 'projetos-component'
    },
    {
        path: 'contatos-crud',
        loadChildren: ()=>
            import('./pages/contatos-crud/contatos.routes').then((routes) => routes.contatoRouter ),
    },
    {
        path: '**',
        component: InicioComponent,
        title: 'inicio-component'
    }
];

