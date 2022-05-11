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
   precoProduto: number = 2.51;
   promocao: boolean = true;
   foto: string = 'assets/img/drake-e-josh.jpg';
   dataValidade = '2021-12-31'


  constructor() {

    //this.anuncio = 'O' + this.nomeProduto + 'está em promoção';

    console.log('Nome do Produto:', this.nomeProduto);
    console.log('Anuncio:', this.anuncio);
    console.log('ID:', this.idProduto);
    console.log('Preço:', this.precoProduto);
    console.log('Promoção:', this.promocao);


<<<<<<< HEAD



=======
    var idade = 5
    //idade = 30
    //var é global pode muda



    //let idade2 = 20
    //idade2 = 67
    //console.log ('idade é:', idade2)


    /*const idade3 = 45 //nao altera
    idade3 = 2
    console.log ('idade:', idade3)*/


   /* function imprimeIdade()
    {
      for (var idade = 35; idade <= 40; idade ++)
      {
        console.log('Minha idade dentro do for é:', idade)
      }
      console.log('Minha idade fora do for é:', idade)


    }
    imprimeIdade()*/

    

    /*let variavel = 0;
    //let variavel = 10;

    function funcao()
    {
      let outra_variavel = 20;
      //let outra_variavel = 30;
      
      console.log('outra_variavel', outra_variavel);

    }
    funcao();
   







    
    /*var variavel = 0;
    var variavel = 10;

    function funcao()
    {
      var outra_variavel = 20;
      var outra_variavel = 30;
      
      console.log('outra_variavel', outra_variavel);

    }
    funcao();8*/
   

    /*var a = 10;
    var b = 20;

    function bar ()
    {
      var a = 30; 
      let b= 40;

      if(true)
      {
        var a = 50;
        let b = 60;
        console.log('Variavel a dentro do if', a);
        console.log('Variavel b dentro do if', b);
      }

      console.log('Variavel a dentro da função', a);
      console.log('Variavel b dentro da função', b);

    }
    bar();
    console.log('Variavel a fora da função', a);
    console.log('Variavel b fora da função', b);*/

    /*let a =1;
    function bar()
    {
      console.log('variavel a:', a);
      let b = 2;
      if(true)
      {
        let c = 3;
        let a = 4;
        console.log('variavel a dentro da if:', a);
        console.log('variavel b dentro da if :', b);
        console.log('variavel c dentro do if:', a);

      }
      console.log('variavel a fora da if:', a);
      console.log('variavel b fora da if :', b);

     //console.log('variavel c fora da if :', c);

    

    }
    bar();*/

    /*var a = 5;
    var b = 10;
    if (a = 5)
    {
      let a = 4;
      var b = 1; 

      console.log('Variavel a dentro da if', a);
      console.log('Variavel b dentro da if', b);
    }
    
    console.log('Variavel a fora da if', a);
    console.log('Variavel b fora da if', b);*/




>>>>>>> 19493c3cd00680ed8a9ef3f58ed0d3a7c44f418c



  }

  ngOnInit(): void {
  }

}
