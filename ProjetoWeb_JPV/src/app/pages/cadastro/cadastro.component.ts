import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/models/Pessoas';
import { PessoaService } from 'src/app/services/pessoa-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  btnAcao = "Cadastrar!";
  btnTitulo = "Cadastrar Pessoa!";

  constructor(private pessoaService :PessoaService, private router: Router) {
  }

  ngOnInit(): void {
  }

  createPessoa(pessoa: Pessoa){

       this.pessoaService.CreatePessoa(pessoa).subscribe((data) => {
          this.router.navigate(['/']);
       })
  }



}
