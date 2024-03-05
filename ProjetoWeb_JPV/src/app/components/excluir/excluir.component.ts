import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/models/Pessoas';
import { PessoaService } from 'src/app/services/pessoa-service.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit{

  inputdata:any
  pessoa!: Pessoa;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private pessoaService: PessoaService, private router: Router, private ref:MatDialogRef<ExcluirComponent>){}

  ngOnInit(): void {
      this.inputdata = this.data;

      this.pessoaService.GetPessoa(this.inputdata.id).subscribe(data => {
          this.pessoa = data.info;
      });
  }

  formatarData(data: string): string {
    if (!data) return '';
    // Divida a data e o tempo
    const [dataPart, tempoPart] = data.split('T');
    // Divida a parte da data em ano, mês e dia
    const [ano, mes, dia] = dataPart.split('-');
    // Formate a data como 'dd/mm/aaaa'
    return `${dia}/${mes}/${ano}`;
  }
  
  
  excluir(){
    this.pessoaService.ExcluirPessoa(this.inputdata.id).subscribe(data => {
       this.ref.close();
       window.location.reload();
    });
  }

}
