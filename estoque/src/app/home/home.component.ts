import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  estoque = [
    {
      codigo: 1,
      descricao: 'Motor',
      qtde_disponivel: 2,
      qtde_maxima: 100,
      qtde_minima: 50,
    },
    {
      codigo: 2,
      descricao: 'Freio',
      qtde_disponivel: 23,
      qtde_maxima: 150,
      qtde_minima: 75,
    },
    {
      codigo: 3,
      descricao: 'Acelerador',
      qtde_disponivel: 12,
      qtde_maxima: 200,
      qtde_minima: 100,
    },
  ];
}
