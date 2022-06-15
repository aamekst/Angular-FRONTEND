import { IProduto } from './../../../model/IProduto.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {

  produto:IProduto = {

    nome: '',
    dataValidade: new  Date (),
    precoProduto: 0
  };


  constructor(
    private produtoService:ProdutosService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.produtoService.buscarPorId(id).subscribe(retorno =>
      {
        this.produto = retorno;
    });
  }

  salvarProduto(): void {
    this.produtoService.atualizar(this.produto).subscribe(retorno =>
      {
        this.produto = retorno;
        this.produtoService.exibirMensagem(
          'Sistema',
          `${this.produto.nome} Foi atualizado com sucesso. `,
          'toast-success'
        );
        this.router.navigate(['/produtos']);

      });



  }

}
