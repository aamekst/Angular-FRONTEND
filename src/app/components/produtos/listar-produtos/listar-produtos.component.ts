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
