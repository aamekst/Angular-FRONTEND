import { ProdutosService } from './../../../services/produtos.service';

import { IProduto } from './../../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto:IProduto = {

    nome: '',
    dataValidade: new  Date (),
    precoProduto: 0
  };


  constructor(private produtoService:ProdutosService, private router: Router) {


   }

  ngOnInit(): void {
  }

  salvarProduto(): void {
    this.produtoService.cadastrar(this.produto).subscribe(retorno =>
      {
        this.produto = retorno;
        this.produtoService.exibirMensagem(
          'Sistema',
          `${this.produto.nome} Foi cadastrado com sucesso. ID: ${this.produto.id}`,
          'toast-success'
        );
        this.router.navigate(['/produtos']);

      });



  }

}
