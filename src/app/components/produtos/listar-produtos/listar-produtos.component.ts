import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumber: number [] = [15, 15, 18, 100];

  objetoModelo = {
    nome: 'Drake',
    idade: 17,
    altura: 1.80,
    graduacao: true
  };

  listaproduto: any [] = [
    {nome: 'Curso de Angular', precoProduto: 35.56, validade: '2021-12-31', id: 1},
    {nome: 'Curso de Ionic', precoProduto: 50, validade: '2021-12-31', id: 2},
    {nome: 'Curso de Ionic Avançado', precoProduto: 80, validade: '2021-12-31', id: 3},
  ];

  constructor() {
    for (let item of this.listaStrings)
    {
      console.log(item);
    }

    for (const item of this.listaNumber)
    {
      console.log(item);
    }



    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);




   }

  ngOnInit(): void {
  }

}
