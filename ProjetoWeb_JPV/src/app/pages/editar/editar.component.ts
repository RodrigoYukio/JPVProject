import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/models/Pessoas';
import { PessoaService } from 'src/app/services/pessoa-service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{

  btnAcao = "Editar";
  btnTitulo = "Editar dados!";
  pessoa!: Pessoa;
  id!:number;

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute, private router : Router) {

  }

  ngOnInit(): void {
    this.id =  Number(this.route.snapshot.paramMap.get("id"));
      this.pessoaService.GetPessoa( this.id).subscribe((data) => {
         const dados = data.info;
         this.pessoa = dados;

    });
  }

  async editPessoa(pessoa : Pessoa){

      this.pessoaService.EditPessoa(pessoa).subscribe(data => {
        this.router.navigate(['/']);
      });

  }

}
