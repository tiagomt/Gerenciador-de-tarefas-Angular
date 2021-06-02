import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaRoutes } from './tarefas';
//componente para a rota exemplo importado
// import { ListarTarefaComponent } from './tarefas/listar/';

const routes: Routes = [

    // exemplo criaçao rota
    // { path: 'tarefas', component: ListarTarefaComponent }


    //definindo localhost/tarefas/listar como página inicial
    {
        path: '',
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
    },

    //trazendo as rotas criadas em tarefas-routing.module.ts
    ...TarefaRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
