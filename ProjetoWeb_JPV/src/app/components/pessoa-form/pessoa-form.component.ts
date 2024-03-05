import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/models/Pessoas';
import { PessoaService } from 'src/app/services/pessoa-service.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Pessoa>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input()  dadosPessoa: Pessoa | null = null;

  
  PessoaForm!: FormGroup;


  constructor(private pessoaService : PessoaService, private router: Router) {
  }


  ngOnInit(): void { debugger

    this.PessoaForm = new FormGroup ({ 
      id: new FormControl(this.dadosPessoa ? this.dadosPessoa.id : 0),
      nomeCompleto: new FormControl(this.dadosPessoa ? this.dadosPessoa.nomeCompleto : '', [Validators.required]),
      dataNascimento: new FormControl(this.dadosPessoa ? this.dadosPessoa.dataNascimento : '',[Validators.required]),
      valorRenda: new FormControl(this.dadosPessoa ? this.dadosPessoa.valorRenda : '',[Validators.required]),
      cpf: new FormControl(this.dadosPessoa ? this.dadosPessoa.cpf : '',[Validators.required])
    });
  }

  get nome(){
    return this.PessoaForm.get('nome')!;
  }

  formatarData(data: string): string {debugger
    if (!data) return '';
    const [dataPart, tempoPart] = data.split('T');
    const [ano, mes, dia] = dataPart.split('-');
    return `${dia}/${mes}/${ano}`;
  }
  
  submit() {
    const formData = this.PessoaForm.value;

    const dataParts = formData.dataNascimento.split('/');
    const dataFormatada = `${dataParts[2]}-${dataParts[1]}-${dataParts[0]}T00:00:00`;
    formData.dataNascimento = dataFormatada;
    
    console.log(formData);
    this.onSubmit.emit(formData);
  }

}
