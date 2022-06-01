import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nomeProduto: string = "Curso de Angular"


   anuncio: string = `O ${this.nomeProduto} está em promoção!`;
   idProduto: number = 3;
   precoProduto: number = 10.99;
   promocao: boolean = true;
   foto: string = 'assets/img/drake-e-josh.jpg';
   dataValidade = '2021-12-31'

   listaStrings: string [] = ['Primeiro', 'Segundo', 'Terceiro'];
   listaNumeros: number [] = [15, 29, 30, 50];

   listaProdutos: any [] = [
   {
      nome: 'Curso de MySql',
      precoProduto: 40,
      validade: '2023-05-12',
      id:1
   },

   {
    nome: 'Curso de PHP',
    precoProduto: 14.99,
    validade: '2022-09-26',
    id:2
 },

  {
    nome: 'Curso de SQL SERVER',
    precoProduto: 25,
    validade: '2022-10-05',
    id:3
  },

  {
    nome: 'Curso de Design gráfico',
    precoProduto: 40.99,
    validade: '2023-12-20',
    id:4
  },

  {
    nome: 'Curso de Java',
    precoProduto: 10,
    validade: '2022-11-10',
    id:5
  },




  ];


  constructor() {

    //this.anuncio = 'O' + this.nomeProduto + 'está em promoção';

    console.log('Nome do Produto:', this.nomeProduto);
    console.log('Anuncio:', this.anuncio);
    console.log('ID:', this.idProduto);
    console.log('Preço:', this.precoProduto);
    console.log('Promoção:', this.promocao);

    for(let item of this.listaStrings)
    {
      console.log(item);
    }

    for(const item of this.listaNumeros)
    {
      console.log(item);
    }

  }

  ngOnInit(): void {
  }
  salvar(): void {
    alert('Salvo com sucesso!');


  }

}
