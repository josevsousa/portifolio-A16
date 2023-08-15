import { Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        title: 'inicio-component'
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
        path: 'contato',
        component: ContatoComponent,
        title: 'contato-component'
    },
    {
        path: '**',
        component: InicioComponent,
        title: 'inicio-component'
    }
];

