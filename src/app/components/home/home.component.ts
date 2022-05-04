import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nomeProduto: string = "Curso de Angular"


   anuncio: string = `O ${this.nomeProduto} está em promoção!`;
   idProduto: number = 123;
   precoProduto: number = 2.59;
   promocao: boolean = true;


  constructor() {

    //this.anuncio = 'O' + this.nomeProduto + 'está em promoção';

    console.log('Nome do Produto:', this.nomeProduto);
    console.log('Anuncio:', this.anuncio);
    console.log('ID:', this.idProduto);
    console.log('Preço:', this.precoProduto);
    console.log('Promoção:', this.promocao);


    let idade = 5
    //idade = 30
    //var é global pode muda



    //let idade2 = 20
    //idade2 = 67
    //console.log ('idade é:', idade2)


    /*const idade3 = 45 //nao altera
    idade3 = 2
    console.log ('idade:', idade3)*/


    function imprimeIdade()
    {
      for (let idade = 35; idade <= 40; idade ++)
      {
        console.log('Minha idade dentro do for é:', idade)
      }
      console.log('Minha idade fora do for é:', idade)


    }
    imprimeIdade()




  }

  ngOnInit(): void {
  }

}
