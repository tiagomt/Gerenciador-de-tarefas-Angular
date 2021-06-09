import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';

export const TarefaRoutes: Routes = [

    //rota localhost/tarefas
    {
        //caminho da pagina no browser
        path: 'tarefas',
        //caminho do que será redirecionado
        redirectTo: 'tarefas/listar'

    },
    //rota localhost/tarefas/listar
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent

    },
    //rota localhost/tarefas/cadastrar
    {

        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent

    }


]