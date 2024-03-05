import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/services/pessoa-service.service';
import { Pessoa } from '../../models/Pessoas';
import { ExcluirComponent } from '../../components/excluir/excluir.component'
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  pessoas: Pessoa[] = [];
  pessoasGeral: Pessoa[] = [];
  columnsToDisplay = ['Nome', 'Data', 'Valor', 'editar', 'excluir'];


  constructor(private pessoaService : PessoaService, public matDialog: MatDialog) { }


  ngOnInit(): void {
    this.pessoaService.GetPessoas().subscribe((data) => {
      const dados = data.info;
      dados.map((item) => {
        item.valorRenda = Number(item.valorRenda).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });
        item.dataNascimento = new Date(item.dataNascimento).toLocaleDateString('pt-BR');
      });
  
      this.pessoasGeral = dados;
      this.pessoas = dados;
    });
  }



  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.pessoas = this.pessoasGeral.filter(pessoa => {
      return pessoa.nomeCompleto.toLowerCase().includes(value);
    })
  }


  openDialog(id : number){
    this.matDialog.open(ExcluirComponent,{
      width: '350px',
      height: '350px',
      data: {
        id: id
      }
    })
  }


}



