import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  //pega se a tarefa está concluída ou não
  @Input() tarefaConcluida: boolean;

  //Referencia do elemento HTML(ElementRef)
  constructor(private el: ElementRef) { }

  ngOnInit() {

    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = "line-through";
    }

  }

}
