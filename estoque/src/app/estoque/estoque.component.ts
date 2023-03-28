import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent {

  estoque = 
  [
    {
        "codigo" : 1,
        "descricao" : "Motor",
        "qtde_disponivel" : 2,
        "qtde_maxima" : 100,
        "qtde_minima" : 50
    },
    {
        "codigo" : 2,
        "descricao" : "Freio",
        "qtde_disponivel" : 23,
        "qtde_maxima" : 150,
        "qtde_minima" : 75
    },
    {
        "codigo" : 3,
        "descricao" : "Acelerador",
        "qtde_disponivel" : 12,
        "qtde_maxima" : 200,
        "qtde_minima" : 100
    },
    {
        "codigo" : 4,
        "descricao" : "Farol",
        "qtde_disponivel" : 66,
        "qtde_maxima" : 100,
        "qtde_minima" : 50
    },
    {
        "codigo" : 5,
        "descricao" : "Oleo",
        "qtde_disponivel" : 21,
        "qtde_maxima" : 80,
        "qtde_minima" : 40
    },
    {
        "codigo" : 6,
        "descricao" : "Pneu",
        "qtde_disponivel" : 80,
        "qtde_maxima" : 60,
        "qtde_minima" : 30
    }
    ]

  adicionarEstoque()
  {
    alert('Estoque atualizado')
  }

  removerEstoque()
  {
    alert('Quantidade removida')
  }

}
