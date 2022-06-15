import { IProduto } from './../../../model/IProduto.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {


  listaproduto: IProduto[] = [];

  constructor(private produtoService: ProdutosService) {

   }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.buscarTodos().subscribe(retorno =>{
        this.listaproduto = retorno;
    })
  }

  deletar(produto: IProduto): void
  {
    this.produtoService.excluir(produto.id!).subscribe(() =>{
      this.produtoService.exibirMensagem(
        'Sistema',
        `${produto.nome} Foi excluído com sucesso!`,
        'toast-error'
        );
        this.carregarProdutos();



      });



}

}
